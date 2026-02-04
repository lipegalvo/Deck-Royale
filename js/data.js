// ===== ARENAS DATA =====
const ARENAS = [
    { id: 1, name: "Arena de Treinamento", number: 0, icon: "🎯", minTrophies: 0 },
    { id: 2, name: "Goblândia", number: 1, icon: "🏕️", minTrophies: 0 },
    { id: 3, name: "Osso", number: 2, icon: "💀", minTrophies: 300 },
    { id: 4, name: "Bárbara", number: 3, icon: "⚔️", minTrophies: 600 },
    { id: 5, name: "P.E.K.K.A", number: 4, icon: "🤖", minTrophies: 1000 },
    { id: 6, name: "Feitiço", number: 5, icon: "✨", minTrophies: 1300 },
    { id: 7, name: "Construtora", number: 6, icon: "🏗️", minTrophies: 1600 },
    { id: 8, name: "Real", number: 7, icon: "👑", minTrophies: 2000 },
    { id: 9, name: "Gelo Congelante", number: 8, icon: "❄️", minTrophies: 2300 },
    { id: 10, name: "Selva", number: 9, icon: "🌴", minTrophies: 2600 },
    { id: 11, name: "Hog Mountain", number: 10, icon: "🐗", minTrophies: 3000 },
    { id: 12, name: "Eletrovale", number: 11, icon: "⚡", minTrophies: 3400 },
    { id: 13, name: "Pico Lendário", number: 12, icon: "🏔️", minTrophies: 3800 },
    { id: 14, name: "Pico Titânico", number: 13, icon: "⛰️", minTrophies: 4200 },
    { id: 15, name: "Maestria", number: 14, icon: "🏆", minTrophies: 4600 },
    { id: 16, name: "Campeão", number: 15, icon: "👑", minTrophies: 5000 }
];

// ===== CARDS DATABASE =====
const CARDS = [
    // TROPAS
    { id: 1, name: "Cavaleiro", type: "troop", category: "tank", elixir: 3, icon: "🗡️", unlockedArena: 0, rarity: "common" },
    { id: 2, name: "Arqueiras", type: "troop", category: "ranged", elixir: 3, icon: "🏹", unlockedArena: 0, rarity: "common" },
    { id: 3, name: "Gigante", type: "troop", category: "tank", elixir: 5, icon: "💪", unlockedArena: 0, rarity: "rare" },
    { id: 4, name: "Goblins", type: "troop", category: "cycle", elixir: 2, icon: "👺", unlockedArena: 1, rarity: "common" },
    { id: 5, name: "Mini P.E.K.K.A", type: "troop", category: "support", elixir: 4, icon: "⚔️", unlockedArena: 0, rarity: "rare" },
    { id: 6, name: "Espadachim", type: "troop", category: "support", elixir: 4, icon: "🤺", unlockedArena: 0, rarity: "epic" },
    { id: 7, name: "Príncipe", type: "troop", category: "support", elixir: 5, icon: "🐴", unlockedArena: 0, rarity: "epic" },
    { id: 8, name: "Bebê Dragão", type: "troop", category: "air", elixir: 4, icon: "🐲", unlockedArena: 0, rarity: "epic" },
    { id: 9, name: "Esqueletos", type: "troop", category: "cycle", elixir: 1, icon: "💀", unlockedArena: 2, rarity: "common" },
    { id: 10, name: "Valquíria", type: "troop", category: "support", elixir: 4, icon: "🪓", unlockedArena: 2, rarity: "rare" },
    { id: 11, name: "Invocador de Esqueletos", type: "troop", category: "support", elixir: 4, icon: "🧙", unlockedArena: 2, rarity: "epic" },
    { id: 12, name: "Bruxa", type: "troop", category: "support", elixir: 5, icon: "🧙‍♀️", unlockedArena: 0, rarity: "epic" },
    { id: 13, name: "Bárbara Elite", type: "troop", category: "tank", elixir: 6, icon: "⚔️⚔️", unlockedArena: 3, rarity: "common" },
    { id: 14, name: "Gigante Real", type: "troop", category: "tank", elixir: 6, icon: "👑", unlockedArena: 7, rarity: "rare" },
    { id: 15, name: "P.E.K.K.A", type: "troop", category: "tank", elixir: 7, icon: "🤖", unlockedArena: 4, rarity: "epic" },
    { id: 16, name: "Horda de Goblins", type: "troop", category: "support", elixir: 3, icon: "👹👹", unlockedArena: 1, rarity: "common" },
    { id: 17, name: "Horda de Servos", type: "troop", category: "air", elixir: 3, icon: "🦇", unlockedArena: 0, rarity: "common" },
    { id: 18, name: "Espíritos de Fogo", type: "troop", category: "cycle", elixir: 1, icon: "🔥", unlockedArena: 5, rarity: "common" },
    { id: 19, name: "Espíritos de Gelo", type: "troop", category: "cycle", elixir: 1, icon: "❄️", unlockedArena: 8, rarity: "common" },
    { id: 20, name: "Golem", type: "troop", category: "tank", elixir: 8, icon: "🗿", unlockedArena: 6, rarity: "epic" },
    { id: 21, name: "Megacavaleiro", type: "troop", category: "tank", elixir: 7, icon: "🛡️", unlockedArena: 7, rarity: "legendary" },
    { id: 22, name: "Montador de Porcos", type: "troop", category: "support", elixir: 4, icon: "🐷", unlockedArena: 10, rarity: "rare" },
    { id: 23, name: "Balão", type: "troop", category: "air", elixir: 5, icon: "🎈", unlockedArena: 0, rarity: "epic" },
    { id: 24, name: "Lava Hound", type: "troop", category: "air", elixir: 7, icon: "🌋", unlockedArena: 4, rarity: "legendary" },
    { id: 25, name: "Mosqueteira", type: "troop", category: "ranged", elixir: 4, icon: "🔫", unlockedArena: 0, rarity: "rare" },
    { id: 26, name: "Bárbaro", type: "troop", category: "tank", elixir: 5, icon: "🪓🪓", unlockedArena: 3, rarity: "common" },
    { id: 27, name: "Mago", type: "troop", category: "ranged", elixir: 5, icon: "🧙‍♂️", unlockedArena: 0, rarity: "rare" },
    { id: 28, name: "Caçadora", type: "troop", category: "ranged", elixir: 4, icon: "🏹", unlockedArena: 11, rarity: "epic" },
    { id: 29, name: "Megaservos", type: "troop", category: "air", elixir: 7, icon: "🦇🦇", unlockedArena: 11, rarity: "epic" },
    { id: 30, name: "Executor", type: "troop", category: "ranged", elixir: 5, icon: "🪓", unlockedArena: 9, rarity: "epic" },

    // CONSTRUÇÕES (BUILDINGS)
    { id: 31, name: "Canhão", type: "building", category: "defense", elixir: 3, icon: "🔫", unlockedArena: 0, rarity: "common" },
    { id: 32, name: "Torre de Arqueiras", type: "building", category: "defense", elixir: 3, icon: "🏹", unlockedArena: 2, rarity: "rare" },
    { id: 33, name: "Cabana de Goblins", type: "building", category: "defense", elixir: 5, icon: "🏠", unlockedArena: 1, rarity: "rare" },
    { id: 34, name: "Torre Inferno", type: "building", category: "defense", elixir: 5, icon: "🔥", unlockedArena: 4, rarity: "rare" },
    { id: 35, name: "Torre Tesla", type: "building", category: "defense", elixir: 4, icon: "⚡", unlockedArena: 4, rarity: "common" },
    { id: 36, name: "Bomba da Gigante", type: "building", category: "defense", elixir: 4, icon: "💣", unlockedArena: 8, rarity: "epic" },
    { id: 37, name: "Fornalha", type: "building", category: "defense", elixir: 4, icon: "🔥", unlockedArena: 5, rarity: "rare" },
    { id: 38, name: "Torre de Bombas", type: "building", category: "defense", elixir: 5, icon: "💣", unlockedArena: 2, rarity: "rare" },
    { id: 39, name: "Coletor de Elixir", type: "building", category: "defense", elixir: 6, icon: "⚗️", unlockedArena: 6, rarity: "rare" },
    { id: 40, name: "X-Besta", type: "building", category: "defense", elixir: 6, icon: "🎯", unlockedArena: 3, rarity: "epic" },

    // FEITIÇOS
    { id: 41, name: "Flechas", type: "spell", category: "light_spell", elixir: 2, icon: "➡️➡️", unlockedArena: 0, rarity: "common" },
    { id: 42, name: "Bola de Fogo", type: "spell", category: "heavy_spell", elixir: 4, icon: "🔥", unlockedArena: 0, rarity: "rare" },
    { id: 43, name: "Zap", type: "spell", category: "light_spell", elixir: 2, icon: "⚡", unlockedArena: 5, rarity: "common" },
    { id: 44, name: "Veneno", type: "spell", category: "heavy_spell", elixir: 4, icon: "☠️", unlockedArena: 5, rarity: "epic" },
    { id: 45, name: "Raio", type: "spell", category: "heavy_spell", elixir: 6, icon: "⚡⚡", unlockedArena: 0, rarity: "epic" },
    { id: 46, name: "Foguete", type: "spell", category: "heavy_spell", elixir: 6, icon: "🚀", unlockedArena: 3, rarity: "rare" },
    { id: 47, name: "Tronco", type: "spell", category: "light_spell", elixir: 2, icon: "🪵", unlockedArena: 6, rarity: "legendary" },
    { id: 48, name: "Congelamento", type: "spell", category: "heavy_spell", elixir: 4, icon: "❄️❄️", unlockedArena: 8, rarity: "epic" },
    { id: 49, name: "Tornado", type: "spell", category: "light_spell", elixir: 3, icon: "🌪️", unlockedArena: 11, rarity: "epic" },
    { id: 50, name: "Espelho", type: "spell", category: "light_spell", elixir: 1, icon: "🪞", unlockedArena: 5, rarity: "epic" },
    { id: 51, name: "Clone", type: "spell", category: "light_spell", elixir: 3, icon: "👥", unlockedArena: 8, rarity: "epic" },
    { id: 52, name: "Fúria", type: "spell", category: "light_spell", elixir: 2, icon: "😡", unlockedArena: 6, rarity: "epic" },
    { id: 53, name: "Bola de Neve", type: "spell", category: "light_spell", elixir: 2, icon: "⛄", unlockedArena: 8, rarity: "common" },
    { id: 54, name: "Terremoto", type: "spell", category: "heavy_spell", elixir: 3, icon: "🌋", unlockedArena: 6, rarity: "rare" }
];

// ===== PLAY STYLES =====
const PLAY_STYLES = {
    defensive: {
        name: "Defensivo",
        description: "Foco em defesa sólida e contra-ataques",
        preferredCategories: ["defense", "tank", "ranged"],
        avgElixirRange: [3.0, 4.2]
    },
    aggressive: {
        name: "Agressivo",
        description: "Pressão constante e ataques rápidos",
        preferredCategories: ["support", "cycle", "light_spell"],
        avgElixirRange: [2.8, 3.8]
    },
    control: {
        name: "Controle/Estratégico",
        description: "Controle do campo e jogadas calculadas",
        preferredCategories: ["ranged", "defense", "heavy_spell"],
        avgElixirRange: [3.2, 4.0]
    },
    ranged: {
        name: "Longo Alcance",
        description: "Dano à distância e proteção de tropas",
        preferredCategories: ["ranged", "air", "defense"],
        avgElixirRange: [3.5, 4.5]
    },
    fast: {
        name: "Ataque Rápido",
        description: "Ciclo rápido e pressão intensa",
        preferredCategories: ["cycle", "support", "light_spell"],
        avgElixirRange: [2.5, 3.5]
    }
};

// ===== DECK COMPOSITION RULES =====
const DECK_RULES = {
    requiredCategories: {
        tank: { min: 1, max: 2 },
        air: { min: 1, max: 2 },
        defense: { min: 1, max: 1 },
        light_spell: { min: 1, max: 2 },
        heavy_spell: { min: 0, max: 1 },
        support: { min: 1, max: 3 },
        cycle: { min: 0, max: 2 },
        ranged: { min: 1, max: 2 }
    },
    deckSize: 8,
    maxElixirAvg: 4.5,
    minElixirAvg: 2.5
};

// ===== ARENA TIPS =====
const ARENA_TIPS = {
    0: {
        commonMistakes: [
            "Gastar todo o elixir de uma vez sem defesa",
            "Ignorar torres inimigas e focar apenas em tropas",
            "Não usar feitiços para eliminar grupos de tropas"
        ],
        strongCards: ["Gigante", "Arqueiras", "Mini P.E.K.K.A", "Bola de Fogo"],
        strategy: "Aprenda a fazer pushes básicos com tanque + suporte. Defenda primeiro, ataque depois.",
        commonEnemies: ["Decks de enxame", "Gigante + Bruxa", "Príncipe rush"]
    },
    1: {
        commonMistakes: [
            "Deixar goblins atacarem a torre livremente",
            "Não ter defesa contra enxames",
            "Usar cartas muito caras sem necessidade"
        ],
        strongCards: ["Horda de Goblins", "Goblins", "Cabana de Goblins", "Flechas", "Tronco"],
        strategy: "Aprenda a lidar com enxames rápidos. Use feitiços de área no momento certo.",
        commonEnemies: ["Horda de Goblins", "Horda de Servos", "Bait decks"]
    },
    2: {
        commonMistakes: [
            "Não ter resposta para invocações de esqueletos",
            "Desperdiçar elixir com tropas lentas",
            "Ignorar a importância de cycle cards"
        ],
        strongCards: ["Esqueletos", "Valquíria", "Torre de Arqueiras", "Zap"],
        strategy: "Defesa eficiente e ciclo rápido são essenciais. Use esqueletos para distrações.",
        commonEnemies: ["Spawn decks", "Valquíria + Suporte", "Decks de ciclo"]
    },
    3: {
        commonMistakes: [
            "Deixar Bárbaro Elite atravessar sem resposta",
            "Não proteger seu X-Besta",
            "Ataques sem feitiço pesado"
        ],
        strongCards: ["Bárbaro Elite", "Bárbaro", "X-Besta", "Foguete", "Príncipe"],
        strategy: "Bárbaro Elite são fortes mas custam caro. Sempre tenha resposta anti-tanque.",
        commonEnemies: ["Bárbaro Elite rush", "Decks de ciclo", "Decks de controle com X-Besta"]
    },
    4: {
        commonMistakes: [
            "Não ter resposta para P.E.K.K.A",
            "Ignorar Torre Inferno",
            "Pushes sem proteção aérea"
        ],
        strongCards: ["P.E.K.K.A", "Torre Inferno", "Lava Hound", "Mini P.E.K.K.A"],
        strategy: "P.E.K.K.A precisa de muito suporte. Torre Inferno derrete tanques.",
        commonEnemies: ["P.E.K.K.A decks", "Lava Hound + Balão", "Beatdown pesado"]
    },
    5: {
        commonMistakes: [
            "Usar feitiços muito cedo",
            "Não ter Zap ou Flechas",
            "Ignorar sinergias de cartas"
        ],
        strongCards: ["Zap", "Veneno", "Espíritos de Fogo", "Fornalha"],
        strategy: "Feitiços definem partidas. Aprenda timings perfeitos de Zap e Veneno.",
        commonEnemies: ["Spell bait", "Miner + Veneno", "Decks de controle"]
    },
    6: {
        commonMistakes: [
            "Não contra Golem adequadamente",
            "Deixar Tronco no deck sem usar",
            "Ataques desorganizados"
        ],
        strongCards: ["Golem", "Tronco", "Fúria", "Coletor de Elixir"],
        strategy: "Beatdown heavy. Construa vantagem de elixir antes do push final.",
        commonEnemies: ["Golem Beatdown", "Tronco Bait", "Decks de controle"]
    },
    7: {
        commonMistakes: [
            "Não ter resposta para Gigante Real",
            "Ignorar Megacavaleiro",
            "Falta de versatilidade no deck"
        ],
        strongCards: ["Gigante Real", "Megacavaleiro", "Torre Inferno"],
        strategy: "Gigante Real é versátil. Megacavaleiro é excelente defensor.",
        commonEnemies: ["Gigante Real decks", "Bridge spam", "Decks híbridos"]
    },
    8: {
        commonMistakes: [
            "Não se adaptar ao meta de gelo",
            "Usar tropas agrupadas contra Congelamento",
            "Falta de spread nas tropas"
        ],
        strongCards: ["Congelamento", "Espíritos de Gelo", "Bomba da Gigante", "Clone"],
        strategy: "Congelamento pode virar partidas. Espalhe suas tropas.",
        commonEnemies: ["Freeze decks", "Balão + Freeze", "Graveyard Freeze"]
    },
    9: {
        commonMistakes: [
            "Não ter splash damage",
            "Ignorar Executor",
            "Defesa muito fraca"
        ],
        strongCards: ["Executor", "Tornado", "Bebê Dragão"],
        strategy: "Executor + Tornado é combo letal. Splash damage é crucial.",
        commonEnemies: ["Executor Tornado", "Three Musketeers", "Beatdown"]
    },
    10: {
        commonMistakes: [
            "Não defender Montador de Porcos",
            "Deixar torre tomar muito dano",
            "Overcommit no ataque"
        ],
        strongCards: ["Montador de Porcos", "Canhão", "Torre Tesla"],
        strategy: "Hog Rider é win condition clássica. Defenda e contra-ataque.",
        commonEnemies: ["Hog Cycle", "Hog 2.6", "Bridge spam"]
    },
    11: {
        commonMistakes: [
            "Não ter resposta para Caçadora",
            "Ignorar sinergias elétricas",
            "Falta de anti-aéreo"
        ],
        strongCards: ["Caçadora", "Megaservos", "Tornado", "Raio"],
        strategy: "Caçadora fecha pushes. Megaservos são tanque aéreo forte.",
        commonEnemies: ["Megaservos decks", "E-Giant", "X-Bow"]
    },
    12: {
        commonMistakes: [
            "Não dominar seu arquétipo",
            "Erros de timing",
            "Não adaptar-se ao oponente"
        ],
        strongCards: ["Qualquer carta lendária", "Decks refinados"],
        strategy: "Maestria individual importa mais que cartas. Pratique muito.",
        commonEnemies: ["Meta decks", "Decks otimizados", "Pros"]
    },
    13: {
        commonMistakes: [
            "Falta de consistência",
            "Não prever jogadas do oponente",
            "Tilt e decisões ruins"
        ],
        strongCards: ["Depende do meta atual"],
        strategy: "Jogue meta decks otimizados. Cada elixir conta.",
        commonEnemies: ["Top meta decks", "Pro players"]
    },
    14: {
        commonMistakes: [
            "Não acompanhar mudanças de balanceamento",
            "Deck sem sinergia perfeita"
        ],
        strongCards: ["Meta atual"],
        strategy: "Acompanhe pro scene. Adapte-se rápido às mudanças.",
        commonEnemies: ["Top 1000 players"]
    },
    15: {
        commonMistakes: [
            "Subestimar qualquer oponente",
            "Não ter backup de decks"
        ],
        strongCards: ["Meta tier S"],
        strategy: "Nível máximo de jogo. Cada decisão é crítica.",
        commonEnemies: ["Elite players", "Pro teams"]
    }
};

// ===== META DECKS TEMPLATES =====
const META_DECKS = {
    0: [
        {
            name: "Gigante Clássico",
            cards: [3, 2, 25, 5, 31, 42, 41, 9],
            description: "Deck beatdown clássico com Gigante",
            difficulty: "Fácil"
        },
        {
            name: "Príncipe Rush",
            cards: [7, 1, 2, 12, 31, 42, 41, 9],
            description: "Ataque rápido com Príncipe",
            difficulty: "Médio"
        }
    ],
    4: [
        {
            name: "P.E.K.K.A Bridge Spam",
            cards: [15, 6, 21, 8, 43, 44, 47, 18],
            description: "Pressão constante com P.E.K.K.A",
            difficulty: "Difícil"
        },
        {
            name: "Lava Hound Beatdown",
            cards: [24, 23, 17, 8, 34, 43, 42, 18],
            description: "Beatdown aéreo devastador",
            difficulty: "Médio"
        }
    ],
    7: [
        {
            name: "Gigante Real + Caçadora",
            cards: [14, 28, 25, 21, 35, 43, 44, 47],
            description: "Meta deck versátil e forte",
            difficulty: "Médio"
        }
    ],
    10: [
        {
            name: "Hog Cycle 2.6",
            cards: [22, 2, 25, 9, 31, 43, 45, 18],
            description: "Deck de ciclo rápido lendário",
            difficulty: "Muito Difícil"
        }
    ]
};

// Export all data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ARENAS, CARDS, PLAY_STYLES, DECK_RULES, ARENA_TIPS, META_DECKS };
}
