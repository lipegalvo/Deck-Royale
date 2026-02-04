// ===== UI MANAGER =====

class UIManager {
    constructor() {
        this.selectedArena = null;
        this.selectedStyle = null;
        this.favoriteCards = [];
        this.currentFilter = 'all';
        this.trainerDeck = [];
    }

    // Initialize UI components
    init() {
        this.renderArenas();
        this.setupEventListeners();
        this.setupNavigation();
        this.loadProfile();
    }

    // Render arena selection grid
    renderArenas() {
        const arenaGrid = document.getElementById('arenaGrid');
        arenaGrid.innerHTML = '';

        ARENAS.forEach(arena => {
            const arenaCard = document.createElement('div');
            arenaCard.className = 'arena-card';
            arenaCard.dataset.arenaId = arena.id;
            arenaCard.dataset.arenaNumber = arena.number;
            
            arenaCard.innerHTML = `
                <div class="arena-icon">${arena.icon}</div>
                <div class="arena-name">${arena.name}</div>
                <div class="arena-number">Arena ${arena.number}</div>
            `;

            arenaCard.addEventListener('click', () => this.selectArena(arena));
            arenaGrid.appendChild(arenaCard);
        });
    }

    // Select arena
    selectArena(arena) {
        this.selectedArena = arena;
        
        // Update UI
        document.querySelectorAll('.arena-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-arena-id="${arena.id}"]`).classList.add('selected');

        // Update available cards
        this.renderAvailableCards();
    }

    // Render available cards for selected arena
    renderAvailableCards() {
        if (!this.selectedArena) return;

        const cardsGrid = document.getElementById('cardsGrid');
        cardsGrid.innerHTML = '';

        const availableCards = CARDS.filter(card => 
            card.unlockedArena <= this.selectedArena.number
        );

        // Filter by type if needed
        const filteredCards = this.currentFilter === 'all' 
            ? availableCards 
            : availableCards.filter(card => card.type === this.currentFilter);

        filteredCards.forEach(card => {
            const cardItem = document.createElement('div');
            cardItem.className = 'card-item';
            cardItem.dataset.cardId = card.id;

            // Check if already selected
            if (this.favoriteCards.includes(card.id)) {
                cardItem.classList.add('selected');
            }

            // Disable if max favorites reached
            if (this.favoriteCards.length >= 4 && !this.favoriteCards.includes(card.id)) {
                cardItem.classList.add('disabled');
            }

            cardItem.innerHTML = `
                <div class="card-elixir">${card.elixir}</div>
                <div class="card-icon">${card.icon}</div>
                <div class="card-name">${card.name}</div>
            `;

            cardItem.addEventListener('click', () => this.toggleFavoriteCard(card));
            cardsGrid.appendChild(cardItem);
        });
    }

    // Toggle favorite card
    toggleFavoriteCard(card) {
        const index = this.favoriteCards.indexOf(card.id);
        
        if (index > -1) {
            // Remove from favorites
            this.favoriteCards.splice(index, 1);
        } else {
            // Add to favorites (max 4)
            if (this.favoriteCards.length < 4) {
                this.favoriteCards.push(card.id);
            }
        }

        this.renderAvailableCards();
    }

    // Setup event listeners
    setupEventListeners() {
        // Style buttons
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.selectedStyle = btn.dataset.style;
            });
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.renderAvailableCards();
            });
        });

        // Generate deck button
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateDeck();
        });

        // Generate another deck button
        document.getElementById('generateAnotherBtn').addEventListener('click', () => {
            this.generateDeck();
        });

        // Save deck button
        document.getElementById('saveDeckBtn').addEventListener('click', () => {
            this.saveDeck();
        });

        // Share button
        document.getElementById('shareBtn').addEventListener('click', () => {
            this.shareDeck();
        });

        // Mobile menu
        document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
            document.querySelector('.nav').classList.toggle('active');
        });

        // Tips arena selector
        document.getElementById('tipsArenaSelect').addEventListener('change', (e) => {
            this.showArenaTips(parseInt(e.target.value));
        });

        // Meta arena selector
        document.getElementById('metaArenaSelect').addEventListener('change', (e) => {
            this.showMetaDecks(parseInt(e.target.value));
        });

        // Trainer analyze button
        document.getElementById('analyzeBtn').addEventListener('click', () => {
            this.analyzeDeck();
        });
    }

    // Setup navigation
    setupNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.showSection(section);
                
                // Update active nav button
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Close mobile menu
                document.querySelector('.nav').classList.remove('active');
            });
        });

        // Populate arena selectors
        this.populateArenaSelectors();
    }

    // Show specific section
    showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // Initialize section-specific content
        if (sectionId === 'tips') {
            this.showArenaTips(0);
        } else if (sectionId === 'meta') {
            this.showMetaDecks(0);
        } else if (sectionId === 'trainer') {
            this.initTrainer();
        } else if (sectionId === 'profile') {
            this.loadProfile();
        }
    }

    // Populate arena selectors
    populateArenaSelectors() {
        const tipsSelect = document.getElementById('tipsArenaSelect');
        const metaSelect = document.getElementById('metaArenaSelect');

        ARENAS.forEach(arena => {
            const option1 = document.createElement('option');
            option1.value = arena.number;
            option1.textContent = `${arena.icon} ${arena.name}`;
            tipsSelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = arena.number;
            option2.textContent = `${arena.icon} ${arena.name}`;
            metaSelect.appendChild(option2);
        });
    }

    // Generate deck
    generateDeck() {
        if (!this.selectedArena) {
            alert('Por favor, selecione uma arena primeiro!');
            return;
        }

        try {
            const deck = deckGenerator.generateDeck(
                this.selectedArena.number,
                this.selectedStyle,
                this.favoriteCards
            );

            this.displayGeneratedDeck(deck);
        } catch (error) {
            console.error('Error generating deck:', error);
            alert('Erro ao gerar deck. Tente novamente.');
        }
    }

    // Display generated deck
    displayGeneratedDeck(deck) {
        const deckResult = document.getElementById('deckResult');
        const deckCards = document.getElementById('deckCards');
        const avgElixir = document.getElementById('avgElixir');
        const deckCategory = document.getElementById('deckCategory');
        const deckExplanation = document.getElementById('deckExplanation');

        // Clear previous
        deckCards.innerHTML = '';
        deckExplanation.innerHTML = '';

        // Show cards
        deck.cards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'deck-card';
            cardDiv.innerHTML = `
                <div class="deck-card-elixir">${card.elixir}</div>
                <div class="deck-card-icon">${card.icon}</div>
                <div class="deck-card-name">${card.name}</div>
                <div class="deck-card-type">${this.getTypeLabel(card.type)}</div>
            `;
            deckCards.appendChild(cardDiv);
        });

        // Show stats
        avgElixir.textContent = deck.avgElixir;
        deckCategory.textContent = deck.category;

        // Show explanation
        const exp = deck.explanation;
        
        deckExplanation.innerHTML = `
            <div class="explanation-section">
                <h4><i class="fas fa-info-circle"></i> Visão Geral</h4>
                <p>${exp.overview}</p>
            </div>
            
            <div class="explanation-section">
                <h4><i class="fas fa-shield-alt"></i> Como Defender</h4>
                <ul>
                    ${exp.howToDefend.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="explanation-section">
                <h4><i class="fas fa-rocket"></i> Como Atacar</h4>
                <ul>
                    ${exp.howToAttack.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="explanation-section">
                <h4><i class="fas fa-fire"></i> Combos Principais</h4>
                <ul>
                    ${exp.mainCombos.map(combo => `<li>${combo}</li>`).join('')}
                </ul>
            </div>
            
            <div class="explanation-section">
                <h4><i class="fas fa-check-circle"></i> Pontos Fortes</h4>
                <ul>
                    ${exp.strengths.map(str => `<li>${str}</li>`).join('')}
                </ul>
            </div>
            
            <div class="explanation-section">
                <h4><i class="fas fa-exclamation-triangle"></i> Pontos Fracos</h4>
                <ul>
                    ${exp.weaknesses.map(weak => `<li>${weak}</li>`).join('')}
                </ul>
            </div>
        `;

        // Show result
        deckResult.style.display = 'block';
        deckResult.scrollIntoView({ behavior: 'smooth' });
    }

    // Get type label in Portuguese
    getTypeLabel(type) {
        const labels = {
            'troop': 'Tropa',
            'building': 'Construção',
            'spell': 'Feitiço'
        };
        return labels[type] || type;
    }

    // Save deck to profile
    saveDeck() {
        const deck = deckGenerator.generatedDeck;
        if (!deck) return;

        const savedDecks = JSON.parse(localStorage.getItem('savedDecks') || '[]');
        
        const deckData = {
            id: Date.now(),
            name: `${deck.category} - Arena ${this.selectedArena.number}`,
            arena: this.selectedArena.number,
            cards: deck.cards.map(c => c.id),
            avgElixir: deck.avgElixir,
            category: deck.category,
            savedAt: new Date().toISOString()
        };

        savedDecks.push(deckData);
        localStorage.setItem('savedDecks', JSON.stringify(savedDecks));

        alert('Deck salvo com sucesso!');
        this.loadProfile();
    }

    // Share deck
    shareDeck() {
        const deck = deckGenerator.generatedDeck;
        if (!deck) return;

        const text = `Confira meu deck "${deck.category}"!\n` +
            `Média de Elixir: ${deck.avgElixir}\n` +
            `Cartas: ${deck.cards.map(c => c.name).join(', ')}\n\n` +
            `Criado em Deck Royale`;

        if (navigator.share) {
            navigator.share({
                title: 'Meu Deck - Deck Royale',
                text: text
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert('Deck copiado para área de transferência!');
            });
        }
    }

    // Show arena tips
    showArenaTips(arenaNumber) {
        const tips = ARENA_TIPS[arenaNumber];
        const tipsContent = document.getElementById('tipsContent');

        if (!tips) {
            tipsContent.innerHTML = '<p class="empty-message">Sem dicas disponíveis para esta arena.</p>';
            return;
        }

        tipsContent.innerHTML = `
            <div class="tips-grid">
                <div class="tip-box">
                    <h4><i class="fas fa-times-circle"></i> Erros Comuns</h4>
                    <ul>
                        ${tips.commonMistakes.map(mistake => `<li>${mistake}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="tip-box">
                    <h4><i class="fas fa-star"></i> Cartas Fortes</h4>
                    <ul>
                        ${tips.strongCards.map(card => `<li>${card}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="tip-box">
                    <h4><i class="fas fa-chess"></i> Estratégia Recomendada</h4>
                    <p>${tips.strategy}</p>
                </div>
                
                <div class="tip-box">
                    <h4><i class="fas fa-users"></i> Inimigos Comuns</h4>
                    <ul>
                        ${tips.commonEnemies.map(enemy => `<li>${enemy}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Show meta decks
    showMetaDecks(arenaNumber) {
        const metaDecks = META_DECKS[arenaNumber];
        const metaDecksContainer = document.getElementById('metaDecks');

        if (!metaDecks || metaDecks.length === 0) {
            metaDecksContainer.innerHTML = '<p class="empty-message">Sem decks meta disponíveis para esta arena.</p>';
            return;
        }

        metaDecksContainer.innerHTML = '';

        metaDecks.forEach(metaDeck => {
            const cards = metaDeck.cards.map(cardId => CARDS.find(c => c.id === cardId)).filter(c => c);
            const avgElixir = cards.reduce((sum, c) => sum + c.elixir, 0) / cards.length;

            const deckCard = document.createElement('div');
            deckCard.className = 'meta-deck-card';
            
            deckCard.innerHTML = `
                <h4>${metaDeck.name}</h4>
                <p>${metaDeck.description}</p>
                <p><strong>Dificuldade:</strong> ${metaDeck.difficulty}</p>
                <p><strong>Média de Elixir:</strong> ${avgElixir.toFixed(1)}</p>
                <div class="meta-deck-cards">
                    ${cards.map(card => `
                        <div class="meta-card-mini">
                            <div class="meta-card-icon">${card.icon}</div>
                            <div>${card.name}</div>
                        </div>
                    `).join('')}
                </div>
            `;

            metaDecksContainer.appendChild(deckCard);
        });
    }

    // Initialize trainer
    initTrainer() {
        const trainerCardsGrid = document.getElementById('trainerCardsGrid');
        trainerCardsGrid.innerHTML = '';

        CARDS.forEach(card => {
            const cardItem = document.createElement('div');
            cardItem.className = 'card-item';
            
            cardItem.innerHTML = `
                <div class="card-elixir">${card.elixir}</div>
                <div class="card-icon">${card.icon}</div>
                <div class="card-name">${card.name}</div>
            `;

            cardItem.addEventListener('click', () => this.addToTrainerDeck(card));
            trainerCardsGrid.appendChild(cardItem);
        });

        this.trainerDeck = [];
        this.updateTrainerDeck();
    }

    // Add card to trainer deck
    addToTrainerDeck(card) {
        if (this.trainerDeck.length >= 8) {
            alert('Deck já tem 8 cartas!');
            return;
        }

        if (this.trainerDeck.find(c => c.id === card.id)) {
            alert('Carta já está no deck!');
            return;
        }

        this.trainerDeck.push(card);
        this.updateTrainerDeck();
    }

    // Remove card from trainer deck
    removeFromTrainerDeck(index) {
        this.trainerDeck.splice(index, 1);
        this.updateTrainerDeck();
    }

    // Update trainer deck display
    updateTrainerDeck() {
        const trainerDeckEl = document.getElementById('trainerDeck');
        trainerDeckEl.innerHTML = '';

        for (let i = 0; i < 8; i++) {
            if (i < this.trainerDeck.length) {
                const card = this.trainerDeck[i];
                const slot = document.createElement('div');
                slot.className = 'trainer-slot-filled';
                slot.innerHTML = `
                    <button class="remove-card-btn" onclick="uiManager.removeFromTrainerDeck(${i})">×</button>
                    <div class="card-icon">${card.icon}</div>
                    <div class="card-name">${card.name}</div>
                    <div class="card-elixir">${card.elixir}</div>
                `;
                trainerDeckEl.appendChild(slot);
            } else {
                const emptySlot = document.createElement('div');
                emptySlot.className = 'empty-slot';
                emptySlot.textContent = '+';
                trainerDeckEl.appendChild(emptySlot);
            }
        }

        // Enable/disable analyze button
        const analyzeBtn = document.getElementById('analyzeBtn');
        analyzeBtn.disabled = this.trainerDeck.length !== 8;
    }

    // Analyze deck
    analyzeDeck() {
        if (this.trainerDeck.length !== 8) return;

        const analysis = deckGenerator.analyzeDeck(this.trainerDeck);
        const analysisResult = document.getElementById('analysisResult');

        analysisResult.innerHTML = `
            <div class="analysis-section">
                <h4><i class="fas fa-tint"></i> Estatísticas</h4>
                <p><strong>Média de Elixir:</strong> ${analysis.avgElixir}</p>
                <p><strong>Dificuldade:</strong> ${analysis.difficulty}</p>
            </div>

            ${analysis.warnings.length > 0 ? `
                <div class="analysis-section">
                    <h4><i class="fas fa-exclamation-triangle"></i> Avisos</h4>
                    ${analysis.warnings.map(w => `<div class="warning-box"><p>${w}</p></div>`).join('')}
                </div>
            ` : ''}

            ${analysis.strengths.length > 0 ? `
                <div class="analysis-section">
                    <h4><i class="fas fa-check-circle"></i> Pontos Fortes</h4>
                    ${analysis.strengths.map(s => `<div class="success-box"><p>${s}</p></div>`).join('')}
                </div>
            ` : ''}

            ${analysis.suggestions.length > 0 ? `
                <div class="analysis-section">
                    <h4><i class="fas fa-lightbulb"></i> Sugestões</h4>
                    ${analysis.suggestions.map(s => `<div class="info-box"><p>${s}</p></div>`).join('')}
                </div>
            ` : ''}
        `;

        analysisResult.style.display = 'block';
        analysisResult.scrollIntoView({ behavior: 'smooth' });
    }

    // Load profile
    loadProfile() {
        const profileArena = document.getElementById('profileArena');
        const profileDeckCount = document.getElementById('profileDeckCount');
        const savedDecksList = document.getElementById('savedDecksList');

        const savedDecks = JSON.parse(localStorage.getItem('savedDecks') || '[]');

        profileArena.textContent = this.selectedArena 
            ? `${this.selectedArena.icon} ${this.selectedArena.name}` 
            : 'Não definida';
        
        profileDeckCount.textContent = savedDecks.length;

        if (savedDecks.length === 0) {
            savedDecksList.innerHTML = '<p class="empty-message">Nenhum deck salvo ainda</p>';
            return;
        }

        savedDecksList.innerHTML = '';
        savedDecks.forEach(deck => {
            const deckItem = document.createElement('div');
            deckItem.className = 'saved-deck-item';

            const cards = deck.cards.map(id => CARDS.find(c => c.id === id)).filter(c => c);
            
            deckItem.innerHTML = `
                <div class="saved-deck-header">
                    <div class="saved-deck-name">${deck.name}</div>
                    <button class="delete-deck-btn" onclick="uiManager.deleteDeck(${deck.id})">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
                <div class="meta-deck-cards">
                    ${cards.map(card => `
                        <div class="meta-card-mini">
                            <div class="meta-card-icon">${card.icon}</div>
                        </div>
                    `).join('')}
                </div>
                <p>Elixir: ${deck.avgElixir} | ${deck.category}</p>
            `;

            savedDecksList.appendChild(deckItem);
        });
    }

    // Delete deck
    deleteDeck(deckId) {
        if (!confirm('Deseja realmente excluir este deck?')) return;

        const savedDecks = JSON.parse(localStorage.getItem('savedDecks') || '[]');
        const filtered = savedDecks.filter(d => d.id !== deckId);
        localStorage.setItem('savedDecks', JSON.stringify(filtered));

        this.loadProfile();
    }
}

// Create global instance
const uiManager = new UIManager();
