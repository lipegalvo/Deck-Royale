// ===== DECK GENERATOR ENGINE =====

class DeckGenerator {
    constructor() {
        this.generatedDeck = null;
    }

    // Generate intelligent deck based on arena, style, and favorite cards
    generateDeck(arenaNumber, playStyle = null, favoriteCards = []) {
        console.log('Generating deck for arena:', arenaNumber, 'style:', playStyle, 'favorites:', favoriteCards);

        // Get available cards for this arena
        const availableCards = this.getAvailableCards(arenaNumber);
        
        if (availableCards.length < 8) {
            throw new Error('Not enough cards available for this arena');
        }

        // Initialize deck composition tracking
        const deckComposition = {
            tank: 0,
            air: 0,
            defense: 0,
            light_spell: 0,
            heavy_spell: 0,
            support: 0,
            cycle: 0,
            ranged: 0
        };

        const selectedCards = [];
        const favoriteCardObjects = favoriteCards.map(id => CARDS.find(c => c.id === id)).filter(c => c);

        // Step 1: Try to include favorite cards if they fit
        for (const favCard of favoriteCardObjects) {
            if (selectedCards.length < 8 && availableCards.find(c => c.id === favCard.id)) {
                if (this.canAddCard(favCard, deckComposition, selectedCards)) {
                    selectedCards.push(favCard);
                    deckComposition[favCard.category]++;
                }
            }
        }

        // Step 2: Fill required categories with smart selection
        const requiredSlots = this.buildRequiredSlots(playStyle);
        
        for (const slot of requiredSlots) {
            if (selectedCards.length >= 8) break;

            // Check if we already have enough of this category
            const currentCount = deckComposition[slot.category] || 0;
            const maxForCategory = DECK_RULES.requiredCategories[slot.category]?.max || 3;
            
            if (currentCount >= maxForCategory) continue;

            // Find best card for this slot
            const candidate = this.findBestCardForSlot(
                slot,
                availableCards,
                selectedCards,
                deckComposition,
                playStyle
            );

            if (candidate) {
                selectedCards.push(candidate);
                deckComposition[candidate.category]++;
            }
        }

        // Step 3: Fill remaining slots with balanced cards
        while (selectedCards.length < 8) {
            const remainingSlot = this.determineNeededCategory(deckComposition, selectedCards);
            const candidate = this.findBestCardForSlot(
                remainingSlot,
                availableCards,
                selectedCards,
                deckComposition,
                playStyle
            );

            if (!candidate) {
                // Fallback: add any valid card
                const anyCard = availableCards.find(card => 
                    !selectedCards.find(sc => sc.id === card.id) &&
                    this.canAddCard(card, deckComposition, selectedCards)
                );
                if (anyCard) {
                    selectedCards.push(anyCard);
                    deckComposition[anyCard.category]++;
                } else {
                    break; // Can't add more cards
                }
            } else {
                selectedCards.push(candidate);
                deckComposition[candidate.category]++;
            }
        }

        // Step 4: Validate and optimize deck
        if (selectedCards.length < 8) {
            // Fallback: complete deck with any available cards
            const remaining = availableCards.filter(card => 
                !selectedCards.find(sc => sc.id === card.id)
            );
            while (selectedCards.length < 8 && remaining.length > 0) {
                const card = remaining.shift();
                selectedCards.push(card);
                deckComposition[card.category]++;
            }
        }

        // Calculate deck statistics
        const avgElixir = this.calculateAvgElixir(selectedCards);
        const deckCategory = this.determineDeckArchetype(selectedCards, deckComposition, playStyle);

        // Generate explanation
        const explanation = this.generateExplanation(selectedCards, deckComposition, deckCategory, playStyle);

        this.generatedDeck = {
            cards: selectedCards,
            avgElixir,
            category: deckCategory,
            explanation,
            composition: deckComposition
        };

        return this.generatedDeck;
    }

    // Get cards available up to specific arena
    getAvailableCards(arenaNumber) {
        return CARDS.filter(card => card.unlockedArena <= arenaNumber);
    }

    // Check if card can be added to deck
    canAddCard(card, composition, currentDeck) {
        // Don't add duplicates
        if (currentDeck.find(c => c.id === card.id)) return false;

        // Check category limits
        const category = card.category;
        const currentCount = composition[category] || 0;
        const maxAllowed = DECK_RULES.requiredCategories[category]?.max || 3;

        if (currentCount >= maxAllowed) return false;

        // Check elixir average
        const currentElixir = this.calculateAvgElixir([...currentDeck, card]);
        if (currentElixir > DECK_RULES.maxElixirAvg + 0.5) return false;

        return true;
    }

    // Build required slots based on play style
    buildRequiredSlots(playStyle) {
        const baseSlots = [
            { category: 'tank', priority: 10 },
            { category: 'air', priority: 9 },
            { category: 'defense', priority: 9 },
            { category: 'light_spell', priority: 10 },
            { category: 'heavy_spell', priority: 6 },
            { category: 'support', priority: 8 },
            { category: 'ranged', priority: 8 }
        ];

        // Adjust priorities based on play style
        if (playStyle && PLAY_STYLES[playStyle]) {
            const stylePrefs = PLAY_STYLES[playStyle].preferredCategories;
            baseSlots.forEach(slot => {
                if (stylePrefs.includes(slot.category)) {
                    slot.priority += 3;
                }
            });
        }

        // Sort by priority
        return baseSlots.sort((a, b) => b.priority - a.priority);
    }

    // Find best card for a specific slot
    findBestCardForSlot(slot, availableCards, currentDeck, composition, playStyle) {
        const candidates = availableCards.filter(card => {
            // Must match category
            if (card.category !== slot.category) return false;
            
            // Must not be already selected
            if (currentDeck.find(c => c.id === card.id)) return false;
            
            // Must be addable
            return this.canAddCard(card, composition, currentDeck);
        });

        if (candidates.length === 0) return null;

        // Score each candidate
        const scored = candidates.map(card => ({
            card,
            score: this.scoreCard(card, currentDeck, composition, playStyle)
        }));

        // Sort by score and return best
        scored.sort((a, b) => b.score - a.score);
        return scored[0].card;
    }

    // Score a card based on various factors
    scoreCard(card, currentDeck, composition, playStyle) {
        let score = 50; // Base score

        // Elixir efficiency
        if (card.elixir <= 3) score += 10;
        if (card.elixir >= 6) score -= 5;

        // Rarity bonus
        const rarityScores = { common: 5, rare: 10, epic: 15, legendary: 20 };
        score += rarityScores[card.rarity] || 0;

        // Play style synergy
        if (playStyle && PLAY_STYLES[playStyle]) {
            const stylePrefs = PLAY_STYLES[playStyle].preferredCategories;
            if (stylePrefs.includes(card.category)) {
                score += 15;
            }
        }

        // Balance deck elixir
        const currentAvg = this.calculateAvgElixir(currentDeck);
        const newAvg = this.calculateAvgElixir([...currentDeck, card]);
        
        // Prefer cards that keep average around 3.5
        const idealAvg = 3.5;
        const currentDiff = Math.abs(currentAvg - idealAvg);
        const newDiff = Math.abs(newAvg - idealAvg);
        
        if (newDiff < currentDiff) score += 8;
        if (newDiff > currentDiff) score -= 8;

        // Avoid too many of same type
        const sameType = currentDeck.filter(c => c.type === card.type).length;
        if (sameType >= 3) score -= 10;

        return score;
    }

    // Determine what category is needed next
    determineNeededCategory(composition, currentDeck) {
        const needs = [];

        // Check minimum requirements
        for (const [category, rules] of Object.entries(DECK_RULES.requiredCategories)) {
            const current = composition[category] || 0;
            if (current < rules.min) {
                needs.push({ category, priority: 10 - current });
            } else if (current < rules.max) {
                needs.push({ category, priority: 5 });
            }
        }

        // If no specific needs, balance the deck
        if (needs.length === 0) {
            const avgElixir = this.calculateAvgElixir(currentDeck);
            if (avgElixir > 4.0) {
                needs.push({ category: 'cycle', priority: 8 });
            } else {
                needs.push({ category: 'support', priority: 7 });
            }
        }

        needs.sort((a, b) => b.priority - a.priority);
        return needs[0] || { category: 'support', priority: 5 };
    }

    // Calculate average elixir cost
    calculateAvgElixir(cards) {
        if (cards.length === 0) return 0;
        const total = cards.reduce((sum, card) => sum + card.elixir, 0);
        return Math.round((total / cards.length) * 10) / 10;
    }

    // Determine deck archetype
    determineDeckArchetype(cards, composition, playStyle) {
        const avgElixir = this.calculateAvgElixir(cards);
        
        // Check for specific archetypes
        if (avgElixir >= 4.2 && composition.tank >= 2) {
            return "Beatdown Pesado";
        }
        
        if (avgElixir <= 3.2 && composition.cycle >= 1) {
            return "Ciclo Rápido";
        }
        
        if (composition.defense >= 1 && composition.ranged >= 2) {
            return "Controle Defensivo";
        }
        
        if (composition.air >= 2) {
            return "Ataque Aéreo";
        }
        
        if (playStyle === 'aggressive') {
            return "Pressão Constante";
        }
        
        if (playStyle === 'control') {
            return "Controle Estratégico";
        }
        
        if (composition.support >= 3) {
            return "Suporte Versátil";
        }

        return "Deck Balanceado";
    }

    // Generate detailed explanation
    generateExplanation(cards, composition, category, playStyle) {
        const tanks = cards.filter(c => c.category === 'tank');
        const air = cards.filter(c => c.category === 'air' || c.type === 'troop' && c.icon.includes('🦇') || c.icon.includes('🎈') || c.icon.includes('🌋'));
        const defenses = cards.filter(c => c.category === 'defense' || c.type === 'building');
        const spells = cards.filter(c => c.type === 'spell');
        const support = cards.filter(c => c.category === 'support' || c.category === 'ranged');

        const explanation = {
            overview: this.generateOverview(category, playStyle),
            howToDefend: this.generateDefenseStrategy(defenses, air, spells),
            howToAttack: this.generateAttackStrategy(tanks, support, spells, category),
            mainCombos: this.generateCombos(cards, tanks, support),
            strengths: this.generateStrengths(composition, category),
            weaknesses: this.generateWeaknesses(composition, category)
        };

        return explanation;
    }

    generateOverview(category, playStyle) {
        const overviews = {
            "Beatdown Pesado": "Este deck foca em construir grandes pushes com tanques resistentes. Defenda no início e crie uma avalanche de tropas no final.",
            "Ciclo Rápido": "Deck de ciclo veloz que mantém pressão constante. Use cartas baratas para ciclar rapidamente e surpreender o oponente.",
            "Controle Defensivo": "Defenda com eficiência e contra-ataque no momento certo. Controle o ritmo da partida.",
            "Ataque Aéreo": "Domine os céus! Use tropas aéreas para evitar defesas terrestres e causar dano direto.",
            "Pressão Constante": "Nunca dê descanso ao oponente. Ataque incessantemente e force erros.",
            "Controle Estratégico": "Cada jogada conta. Controle o campo de batalha com precisão cirúrgica.",
            "Suporte Versátil": "Deck adaptável com múltiplas opções de resposta para qualquer situação.",
            "Deck Balanceado": "Equilíbrio perfeito entre ataque e defesa. Versátil e confiável."
        };

        return overviews[category] || "Deck equilibrado com boas opções de ataque e defesa.";
    }

    generateDefenseStrategy(defenses, air, spells) {
        let strategy = [];

        if (defenses.length > 0) {
            strategy.push(`Use ${defenses[0].name} para puxar tropas inimigas e ganhar tempo.`);
        }

        if (air.length > 0) {
            strategy.push(`${air[0].name} é essencial contra tropas aéreas inimigas.`);
        } else {
            strategy.push("CUIDADO: Defesa aérea limitada. Use feitiços contra tropas voadoras.");
        }

        if (spells.length > 0) {
            strategy.push(`Use ${spells[0].name} para eliminar enxames e causar dano em área.`);
        }

        strategy.push("Sempre defenda com vantagem de elixir. Nunca gaste demais.");

        return strategy;
    }

    generateAttackStrategy(tanks, support, spells, category) {
        let strategy = [];

        if (tanks.length > 0) {
            strategy.push(`Inicie o push com ${tanks[0].name} na frente para absorver dano.`);
            if (support.length > 0) {
                strategy.push(`Proteja com ${support[0].name} atrás do tanque.`);
            }
        } else {
            strategy.push("Deck sem tanque pesado. Foque em ataques rápidos e distrações.");
        }

        if (category === "Ciclo Rápido") {
            strategy.push("Ataque constantemente com cartas baratas. Não deixe o oponente respirar.");
        }

        if (spells.length >= 2) {
            strategy.push("Use feitiços para abrir caminho e finalizar torres com pouca vida.");
        }

        strategy.push("Aproveite vantagens de elixir para pushes decisivos.");

        return strategy;
    }

    generateCombos(cards, tanks, support) {
        let combos = [];

        if (tanks.length > 0 && support.length > 0) {
            combos.push(`${tanks[0].name} + ${support[0].name}: Combo clássico de tanque com suporte.`);
        }

        // Find spell combos
        const spells = cards.filter(c => c.type === 'spell');
        if (spells.length >= 2) {
            combos.push(`${spells[0].name} + ${spells[1].name}: Controle de área devastador.`);
        }

        // Find air combos
        const airCards = cards.filter(c => c.category === 'air');
        if (airCards.length >= 2) {
            combos.push(`${airCards[0].name} + ${airCards[1].name}: Ataque aéreo coordenado.`);
        }

        if (combos.length === 0) {
            combos.push("Experimente diferentes combinações e descubra sinergias!");
        }

        return combos;
    }

    generateStrengths(composition, category) {
        let strengths = [];

        if (composition.defense >= 1) {
            strengths.push("Defesa sólida contra pushes terrestres");
        }

        if (composition.air >= 2) {
            strengths.push("Excelente contra decks sem anti-aéreo");
        }

        if (composition.cycle >= 1) {
            strengths.push("Ciclo rápido permite respostas ágeis");
        }

        if (composition.heavy_spell >= 1) {
            strengths.push("Feitiço pesado para eliminar defesas chave");
        }

        if (category === "Deck Balanceado") {
            strengths.push("Versatilidade para adaptar-se a qualquer oponente");
        }

        if (strengths.length === 0) {
            strengths.push("Bom potencial de dano");
            strengths.push("Cartas sinérgicas");
        }

        return strengths;
    }

    generateWeaknesses(composition, category) {
        let weaknesses = [];

        if (!composition.air || composition.air === 0) {
            weaknesses.push("Vulnerável a decks aéreos (Balão, Lava Hound)");
        }

        if (!composition.defense || composition.defense === 0) {
            weaknesses.push("Falta construção defensiva para puxar tropas");
        }

        if (!composition.heavy_spell || composition.heavy_spell === 0) {
            weaknesses.push("Dificuldade contra construções defensivas fortes");
        }

        if (composition.tank >= 2) {
            weaknesses.push("Custo alto de elixir pode deixar você vulnerável");
        }

        if (category === "Ciclo Rápido") {
            weaknesses.push("Frágil contra beatdown pesado");
        }

        if (weaknesses.length === 0) {
            weaknesses.push("Requer prática para dominar");
        }

        return weaknesses;
    }

    // Analyze user-built deck
    analyzeDeck(cards) {
        if (cards.length !== 8) {
            return { valid: false, message: "Deck precisa ter exatamente 8 cartas" };
        }

        const analysis = {
            valid: true,
            warnings: [],
            strengths: [],
            weaknesses: [],
            suggestions: [],
            avgElixir: this.calculateAvgElixir(cards),
            difficulty: "Médio"
        };

        // Count categories
        const composition = {
            tank: 0, air: 0, defense: 0, light_spell: 0,
            heavy_spell: 0, support: 0, cycle: 0, ranged: 0
        };

        cards.forEach(card => {
            composition[card.category]++;
        });

        // Check for issues
        if (composition.air === 0) {
            analysis.warnings.push("⚠️ Pouca defesa aérea - Vulnerável a Balão, Lava Hound");
            analysis.suggestions.push("Adicione: Arqueiras, Mosqueteira ou Bebê Dragão");
        }

        if (composition.defense === 0) {
            analysis.warnings.push("⚠️ Sem construção defensiva - Difícil controlar pushes");
            analysis.suggestions.push("Adicione: Canhão, Torre Tesla ou Torre Inferno");
        }

        if (composition.light_spell === 0 && composition.heavy_spell === 0) {
            analysis.warnings.push("⚠️ Sem feitiços - Indefeso contra enxames");
            analysis.suggestions.push("Adicione: Flechas, Zap ou Bola de Fogo");
        }

        if (analysis.avgElixir > 4.5) {
            analysis.warnings.push("⚠️ Elixir muito alto - Difícil de ciclar");
            analysis.suggestions.push("Substitua cartas caras por: Esqueletos, Goblins ou Espíritos");
        }

        if (analysis.avgElixir < 2.8) {
            analysis.warnings.push("⚠️ Elixir muito baixo - Falta poder de ataque");
            analysis.suggestions.push("Adicione um tanque: Gigante, Cavaleiro ou Valquíria");
        }

        if (composition.tank === 0) {
            analysis.warnings.push("⚠️ Sem tanque - Difícil montar pushes fortes");
            analysis.suggestions.push("Adicione: Gigante, Cavaleiro ou Valquíria");
        }

        // Strengths
        if (composition.defense >= 1) {
            analysis.strengths.push("✓ Boa estrutura defensiva");
        }
        if (composition.air >= 1) {
            analysis.strengths.push("✓ Defesa aérea presente");
        }
        if (analysis.avgElixir >= 3.0 && analysis.avgElixir <= 4.0) {
            analysis.strengths.push("✓ Média de elixir balanceada");
        }
        if (composition.light_spell >= 1) {
            analysis.strengths.push("✓ Tem feitiço leve para enxames");
        }

        // Determine difficulty
        if (analysis.avgElixir <= 3.3 && composition.cycle >= 1) {
            analysis.difficulty = "Difícil";
        } else if (composition.tank >= 2 && analysis.avgElixir >= 4.0) {
            analysis.difficulty = "Médio";
        } else if (analysis.warnings.length === 0) {
            analysis.difficulty = "Fácil";
        }

        // Overall assessment
        if (analysis.warnings.length === 0) {
            analysis.strengths.push("✓ Deck bem estruturado!");
        }

        return analysis;
    }
}

// Create global instance
const deckGenerator = new DeckGenerator();
