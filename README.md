# 🏆 Deck Royale - Gerador Inteligente de Decks

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Funcionalidades em Desenvolvimento](#funcionalidades-em-desenvolvimento)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Rodar Localmente](#rodar-localmente)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Lógica de Geração de Decks](#lógica-de-geração-de-decks)
- [Próximos Passos](#próximos-passos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

**Deck Royale** é uma ferramenta web completa e interativa focada em jogadores de **Clash Royale**, projetada para ajudar jogadores a evoluírem em suas arenas através da geração inteligente de decks estratégicos.

### Objetivo Principal

O site funciona como um **assistente estratégico de decks**, onde o jogador informa:
- Em qual arena está jogando
- Seu estilo de jogo preferido (Defensivo, Agressivo, Controle, etc.)
- Cartas favoritas (opcional)

E o sistema gera um **deck de 8 cartas equilibrado e estratégico**, com explicação detalhada de como usar, combos principais, pontos fortes e fracos.

### Design Visual

O site é inspirado visualmente no estilo de jogos de batalha:
- **Cores**: Degradê azul escuro → roxo com detalhes dourados
- **Estética**: Cartões com sombra suave, botões brilhantes, efeitos de glow
- **Responsividade**: Funciona perfeitamente em desktop, tablet e mobile
- **Experiência**: Sensação de ferramenta oficial de estratégia

## ✅ Funcionalidades Implementadas

### 1. **Construtor de Deck Inteligente** ⚔️

#### Passo 1: Seleção de Arena
- Grade visual com todas as 16 arenas do jogo
- Ícones representativos para cada arena
- Filtragem automática de cartas disponíveis por arena

#### Passo 2: Estilo de Jogo (Opcional)
Estilos disponíveis:
- 🛡️ **Defensivo**: Foco em defesa sólida e contra-ataques
- ⚡ **Agressivo**: Pressão constante e ataques rápidos
- ♟️ **Controle/Estratégico**: Controle do campo e jogadas calculadas
- 🎯 **Longo Alcance**: Dano à distância e proteção de tropas
- 🏃 **Ataque Rápido**: Ciclo rápido e pressão intensa

#### Passo 3: Cartas Favoritas (Opcional)
- Seleção de até 4 cartas favoritas
- Filtros por tipo: Todas, Tropas, Construções, Feitiços
- Visual de cartas com ícone, nome e custo de elixir
- Sistema inteligente que prioriza cartas favoritas no deck

#### Geração do Deck
Botão chamativo "GERAR MEU DECK" que cria:
- **8 cartas balanceadas** seguindo regras de composição
- **Média de elixir** calculada
- **Categoria do deck** (ex: "Controle com contra-ataque")
- **Explicação detalhada** incluindo:
  - Visão geral do deck
  - Como defender
  - Como atacar
  - Combos principais
  - Pontos fortes
  - Pontos fracos

#### Ações Pós-Geração
- 🔄 **Gerar outro deck**: Cria nova combinação
- 💾 **Salvar deck**: Guarda no perfil do jogador
- 📤 **Compartilhar**: Compartilha deck via texto

### 2. **Dicas por Arena** 💡

Para cada arena, o site fornece:
- ❌ **Erros Comuns**: Erros que jogadores cometem naquela arena
- ⭐ **Cartas Fortes**: Melhores cartas disponíveis
- ♟️ **Estratégia Recomendada**: Como jogar nessa arena
- 👥 **Inimigos Comuns**: Tipos de decks mais encontrados

### 3. **Metas Atuais** 🔥

- Lista de **decks META** (mais populares) por arena
- Visualização de cartas do deck
- Descrição do estilo de jogo
- Nível de dificuldade

### 4. **Treinador de Erros** 🎓

Ferramenta onde o jogador monta seu próprio deck e recebe:
- ⚠️ **Avisos**: Problemas no deck (ex: "Pouca defesa aérea")
- ✅ **Pontos Fortes**: O que o deck faz bem
- 💡 **Sugestões**: Recomendações de cartas para melhorar
- 📊 **Estatísticas**: Média de elixir e dificuldade

Exemplos de avisos:
- "Pouca defesa aérea"
- "Elixir muito alto"
- "Falta feitiço pesado"
- "Sem tanque para montar pushes"

### 5. **Perfil do Jogador** 👤

Sistema de perfil com:
- Arena atual selecionada
- Contador de decks salvos
- Lista de decks salvos com:
  - Nome do deck
  - Cartas visuais
  - Média de elixir
  - Categoria
  - Botão para excluir
- **Armazenamento local** usando `localStorage`

### 6. **Navegação e UX**

- **Menu responsivo** com ícones
- **Animações suaves** em transições
- **Efeitos visuais** (glow, hover, float)
- **Mobile-first design**
- **Scrolling suave** entre seções
- **Feedback visual** em todas as ações

## 🚧 Funcionalidades em Desenvolvimento

As seguintes funcionalidades estão planejadas para versões futuras:

1. **Compartilhar Deck como Imagem**
   - Gerar imagem visual do deck para compartilhar em redes sociais
   - Usar canvas HTML5 para renderização

2. **Sistema de Conta de Usuário**
   - Login/registro
   - Sincronização de decks entre dispositivos
   - Estatísticas de uso

3. **Análise Avançada de Meta**
   - Integração com APIs de estatísticas reais
   - Taxa de vitória de decks
   - Popularidade de cartas

4. **Modo Batalha Simulada**
   - Simular batalhas entre dois decks
   - Prever vantagens e desvantagens

5. **Sistema de Recomendação Personalizado**
   - Machine Learning para sugerir decks baseado no histórico
   - Análise de estilo de jogo individual

## 🛠 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com animações
  - Gradientes
  - Flexbox e Grid
  - Animações e transições
  - Media queries para responsividade
- **JavaScript (ES6+)**: Lógica da aplicação
  - Classes e módulos
  - Arrow functions
  - Template literals
  - LocalStorage API
  - Intersection Observer

### Bibliotecas CDN
- **Font Awesome 6.4.0**: Ícones
- **Google Fonts (Poppins)**: Tipografia moderna

### Armazenamento
- **LocalStorage**: Persistência de dados no navegador
  - Decks salvos
  - Preferências do usuário

### Padrões e Arquitetura
- **MVC Pattern**: Separação de responsabilidades
- **Programação Orientada a Objetos**: Classes para DeckGenerator e UIManager
- **Event-Driven Architecture**: Sistema de eventos do DOM
- **Responsive Design**: Mobile-first approach

## 📁 Estrutura do Projeto

```
deck-royale/
├── index.html              # Página principal (HTML estruturado)
├── css/
│   └── style.css          # Estilos completos (22KB+)
├── js/
│   ├── data.js            # Banco de dados de cartas e arenas (18KB+)
│   ├── deckGenerator.js   # Engine de geração inteligente (20KB+)
│   ├── ui.js              # Gerenciador de interface (22KB+)
│   └── main.js            # Inicialização e utilitários (3KB+)
└── README.md              # Documentação completa

Total: ~90KB de código (sem assets externos)
```

### Descrição dos Arquivos

#### `index.html`
- Estrutura HTML5 semântica completa
- 5 seções principais: Builder, Dicas, Meta, Treinador, Perfil
- Integração com CDNs (Font Awesome, Google Fonts)
- Meta tags para SEO e responsividade

#### `css/style.css`
- **Reset e Base**: Normalização de estilos
- **Variáveis CSS**: Sistema de cores e espaçamentos
- **Componentes**: Cards, botões, grids, formulários
- **Animações**: Keyframes para efeitos suaves
- **Responsividade**: Media queries para mobile

#### `js/data.js`
Contém todos os dados estáticos:
- **ARENAS**: Array com 16 arenas
- **CARDS**: Array com 54+ cartas
  - Tropas (30+)
  - Construções (10+)
  - Feitiços (14+)
- **PLAY_STYLES**: 5 estilos de jogo
- **DECK_RULES**: Regras de composição
- **ARENA_TIPS**: Dicas detalhadas para cada arena
- **META_DECKS**: Templates de decks populares

#### `js/deckGenerator.js`
Engine principal do sistema:
- **Classe DeckGenerator**
  - `generateDeck()`: Geração inteligente
  - `getAvailableCards()`: Filtragem por arena
  - `canAddCard()`: Validação de regras
  - `buildRequiredSlots()`: Construção de slots necessários
  - `scoreCard()`: Pontuação de cartas
  - `calculateAvgElixir()`: Cálculo de média
  - `determineDeckArchetype()`: Identificação de arquétipo
  - `generateExplanation()`: Geração de textos explicativos
  - `analyzeDeck()`: Análise de deck customizado

#### `js/ui.js`
Gerenciador de interface:
- **Classe UIManager**
  - `init()`: Inicialização
  - `renderArenas()`: Renderizar arenas
  - `selectArena()`: Seleção de arena
  - `renderAvailableCards()`: Mostrar cartas disponíveis
  - `toggleFavoriteCard()`: Adicionar/remover favoritas
  - `generateDeck()`: Trigger de geração
  - `displayGeneratedDeck()`: Mostrar resultado
  - `saveDeck()`: Salvar no localStorage
  - `shareDeck()`: Compartilhar deck
  - `showArenaTips()`: Exibir dicas
  - `showMetaDecks()`: Exibir decks meta
  - `initTrainer()`: Inicializar treinador
  - `analyzeDeck()`: Analisar deck do usuário
  - `loadProfile()`: Carregar perfil

#### `js/main.js`
Ponto de entrada:
- Inicialização da aplicação
- Event listeners globais
- Tratamento de erros
- Funções utilitárias
- Preparação para PWA

## 📖 Como Usar

### Passo a Passo Básico

1. **Acesse o site** através do navegador
2. **Selecione sua arena** clicando em uma das cartas de arena
3. **(Opcional)** Escolha seu estilo de jogo
4. **(Opcional)** Selecione até 4 cartas favoritas
5. **Clique em "GERAR MEU DECK"**
6. **Visualize o deck gerado** com todas as explicações
7. **Salve o deck** para consultar depois no seu perfil

### Outras Funcionalidades

#### Ver Dicas por Arena
1. Clique em "Dicas por Arena" no menu
2. Selecione a arena desejada
3. Leia as dicas específicas

#### Conferir Decks Meta
1. Clique em "Metas Atuais"
2. Selecione a arena
3. Veja decks populares e suas descrições

#### Analisar Seu Próprio Deck
1. Clique em "Treinador de Erros"
2. Monte um deck de 8 cartas
3. Clique em "Analisar Deck"
4. Receba feedback detalhado

#### Gerenciar Perfil
1. Clique em "Perfil"
2. Veja seus decks salvos
3. Exclua decks que não quiser mais

## 🚀 Rodar Localmente

### Opção 1: Servidor HTTP Simples

#### Python 3
```bash
# Clone ou baixe os arquivos
cd deck-royale

# Inicie servidor
python -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

#### Python 2
```bash
python -m SimpleHTTPServer 8000
```

#### Node.js (http-server)
```bash
# Instale http-server globalmente
npm install -g http-server

# Execute na pasta do projeto
http-server -p 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 2: Abrir Diretamente

**Funciona perfeitamente sem servidor!**

1. Baixe todos os arquivos
2. Mantenha a estrutura de pastas
3. Abra `index.html` no navegador
4. Pronto! O site está funcionando

> **Nota**: Algumas funcionalidades avançadas (como Service Workers) requerem servidor HTTP.

### Opção 3: VS Code Live Server

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🏗 Arquitetura do Sistema

### Fluxo de Dados

```
Usuário → UI Manager → Deck Generator → Data Layer
         ↓                    ↓              ↓
    Renderização    ←   Deck Gerado   ←   Cartas/Regras
```

### Camadas da Aplicação

1. **Presentation Layer** (`ui.js`)
   - Gerenciamento de DOM
   - Eventos de usuário
   - Renderização visual

2. **Business Logic Layer** (`deckGenerator.js`)
   - Algoritmo de geração
   - Validações
   - Análise de decks

3. **Data Layer** (`data.js`)
   - Banco de dados estático
   - Configurações
   - Constantes

4. **Application Layer** (`main.js`)
   - Inicialização
   - Coordenação
   - Utilitários

### Design Patterns Utilizados

- **Singleton**: UIManager e DeckGenerator são instâncias únicas
- **Observer**: Event listeners para mudanças de estado
- **Strategy**: Diferentes estratégias de geração por estilo
- **Factory**: Criação de componentes UI dinâmicos
- **MVC**: Separação Model-View-Controller

## 🧠 Lógica de Geração de Decks

### Regras de Composição

Cada deck DEVE ter:
- **1-2 tanques**: Absorver dano e liderar pushes
- **1-2 cartas aéreas**: Defesa e ataque aéreo
- **1 construção defensiva**: Puxar tropas inimigas
- **1-2 feitiços leves**: Eliminar enxames (2-3 elixir)
- **0-1 feitiço pesado**: Destruir construções (4-6 elixir)
- **1-3 cartas de suporte**: Versatilidade
- **0-2 cartas de ciclo**: Cartas baratas (1-2 elixir)
- **1-2 cartas ranged**: Dano à distância

### Algoritmo de Geração (Passo a Passo)

1. **Filtragem por Arena**
   - Remove cartas não disponíveis na arena selecionada

2. **Inclusão de Cartas Favoritas**
   - Tenta incluir cartas favoritas do usuário
   - Valida se mantém equilíbrio do deck

3. **Preenchimento por Categoria**
   - Itera sobre categorias necessárias
   - Seleciona melhor carta para cada slot
   - Sistema de pontuação considera:
     - Custo de elixir
     - Raridade da carta
     - Sinergia com estilo de jogo
     - Balanceamento de média de elixir

4. **Preenchimento de Slots Restantes**
   - Identifica categorias que precisam de reforço
   - Adiciona cartas para balancear o deck

5. **Validação Final**
   - Verifica se deck tem 8 cartas
   - Calcula média de elixir
   - Determina arquétipo do deck

6. **Geração de Explicações**
   - Cria descrições estratégicas
   - Identifica combos principais
   - Lista pontos fortes e fracos

### Sistema de Pontuação de Cartas

```javascript
score = 50 (base)

// Eficiência de elixir
if (elixir <= 3) score += 10
if (elixir >= 6) score -= 5

// Raridade
common: +5, rare: +10, epic: +15, legendary: +20

// Sinergia com estilo
if (categoria in estilo.preferências) score += 15

// Balanceamento de média
if (move_média_para_ideal) score += 8
else score -= 8

// Variedade de tipos
if (muitas_do_mesmo_tipo) score -= 10
```

## 📊 Estrutura de Dados

### Arena Object
```javascript
{
    id: 1,
    name: "Arena de Treinamento",
    number: 0,
    icon: "🎯",
    minTrophies: 0
}
```

### Card Object
```javascript
{
    id: 1,
    name: "Cavaleiro",
    type: "troop", // troop, building, spell
    category: "tank", // tank, air, defense, etc.
    elixir: 3,
    icon: "🗡️",
    unlockedArena: 0,
    rarity: "common" // common, rare, epic, legendary
}
```

### Generated Deck Object
```javascript
{
    cards: [Card, Card, ...], // 8 cartas
    avgElixir: 3.5,
    category: "Beatdown Pesado",
    explanation: {
        overview: "...",
        howToDefend: ["...", "..."],
        howToAttack: ["...", "..."],
        mainCombos: ["...", "..."],
        strengths: ["...", "..."],
        weaknesses: ["...", "..."]
    },
    composition: {
        tank: 1, air: 1, defense: 1, ...
    }
}
```

## 🎯 Próximos Passos Recomendados

### Curto Prazo (1-2 semanas)
1. ✅ Implementar geração de imagem do deck (Canvas API)
2. ✅ Adicionar mais cartas ao banco de dados (cartas recentes)
3. ✅ Melhorar algoritmo de pontuação de cartas
4. ✅ Adicionar mais decks META por arena

### Médio Prazo (1-2 meses)
1. 🔄 Criar sistema de favoritos com tags
2. 🔄 Adicionar histórico de decks gerados
3. 🔄 Implementar comparação entre decks
4. 🔄 Adicionar tutorial interativo para novos usuários
5. 🔄 Criar modo escuro/claro

### Longo Prazo (3-6 meses)
1. 🔮 Integração com API oficial (se disponível)
2. 🔮 Sistema de autenticação de usuário
3. 🔮 Backend para sincronização entre dispositivos
4. 🔮 Comunidade: comentários e avaliações de decks
5. 🔮 Sistema de recomendação com IA/ML
6. 🔮 PWA completo com modo offline

## 🎨 Customização

### Mudar Cores do Tema

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary: #6366f1;      /* Azul primário */
    --secondary: #8b5cf6;     /* Roxo secundário */
    --accent: #fbbf24;        /* Dourado */
    --gold: #fbbf24;          /* Dourado */
    /* ... outras cores ... */
}
```

### Adicionar Novas Cartas

Edite `js/data.js` e adicione ao array `CARDS`:

```javascript
{
    id: 55,
    name: "Nova Carta",
    type: "troop",
    category: "support",
    elixir: 4,
    icon: "🎯",
    unlockedArena: 5,
    rarity: "rare"
}
```

### Criar Novos Estilos de Jogo

Adicione ao objeto `PLAY_STYLES` em `js/data.js`:

```javascript
novo_estilo: {
    name: "Novo Estilo",
    description: "Descrição do estilo",
    preferredCategories: ["categoria1", "categoria2"],
    avgElixirRange: [3.0, 4.0]
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Diretrizes de Código

- Use ES6+ JavaScript
- Mantenha funções pequenas e focadas
- Comente código complexo
- Teste em múltiplos navegadores
- Siga o padrão de nomenclatura existente

## 🐛 Reportar Bugs

Encontrou um bug? Por favor, abra uma issue com:
- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Navegador e versão

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Inspirado no universo de **Clash Royale** da Supercell
- Comunidade de jogadores que fornece feedback
- Fontes: Google Fonts (Poppins)
- Ícones: Font Awesome

## 📞 Contato

- **Projeto**: Deck Royale
- **Versão**: 1.0.0
- **Status**: Ativo e em desenvolvimento
- **Última Atualização**: 2026-02-04

---

<div align="center">
    <strong>🏆 Deck Royale 🏆</strong>
    <br>
    <em>Gerador Inteligente de Decks para Clash Royale</em>
    <br><br>
    <sub>Feito com ❤️ para a comunidade de Clash Royale</sub>
</div>

---

## 📋 URIs Funcionais e Navegação

### Páginas/Seções

| URI/Seção | Descrição | Parâmetros |
|-----------|-----------|------------|
| `#builder` | Construtor de Deck | Arena, Estilo, Cartas Favoritas |
| `#tips` | Dicas por Arena | Arena selecionada |
| `#meta` | Decks Meta Atuais | Arena selecionada |
| `#trainer` | Treinador de Erros | Deck montado pelo usuário |
| `#profile` | Perfil do Jogador | Decks salvos no localStorage |

### Funcionalidades Principais

| Função | Endpoint/Ação | Input | Output |
|--------|---------------|-------|--------|
| Gerar Deck | `deckGenerator.generateDeck()` | Arena, Estilo, Favoritas | Deck Object |
| Analisar Deck | `deckGenerator.analyzeDeck()` | Array de 8 cartas | Analysis Object |
| Salvar Deck | `localStorage.savedDecks` | Deck Object | Sucesso/Erro |
| Compartilhar | `navigator.share()` ou `clipboard` | Deck text | - |

### LocalStorage Keys

| Key | Tipo | Descrição |
|-----|------|-----------|
| `savedDecks` | Array | Decks salvos pelo usuário |
| (futuro) `userPreferences` | Object | Preferências do usuário |
| (futuro) `favoriteCards` | Array | Cartas favoritas globais |

---

**Deck Royale** - Criado para ajudar jogadores a evoluírem! 🚀
