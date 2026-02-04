# 🧪 Guia de Testes - Deck Royale

## Checklist de Testes Manual

### ✅ Testes de Funcionalidade

#### 1. Construtor de Deck

**Seleção de Arena**
- [ ] Clicar em cada arena exibe visual de seleção
- [ ] Arena selecionada fica destacada (borda dourada)
- [ ] Apenas uma arena pode estar selecionada por vez
- [ ] Cartas disponíveis atualizam conforme arena

**Seleção de Estilo**
- [ ] Clicar em estilo marca como selecionado
- [ ] Apenas um estilo pode ser selecionado
- [ ] Estilo pode ser desmarcado
- [ ] Sistema funciona sem estilo selecionado

**Cartas Favoritas**
- [ ] Filtros (Todas/Tropas/Construções/Feitiços) funcionam
- [ ] Máximo de 4 cartas pode ser selecionado
- [ ] Cartas selecionadas ficam destacadas
- [ ] Ao atingir 4 cartas, outras ficam desabilitadas
- [ ] Remover carta favorita libera slot

**Geração de Deck**
- [ ] Botão desabilitado sem arena selecionada
- [ ] Geração cria deck de exatamente 8 cartas
- [ ] Deck respeita cartas disponíveis na arena
- [ ] Cartas favoritas têm prioridade no deck
- [ ] Média de elixir é calculada corretamente
- [ ] Categoria do deck é exibida
- [ ] Explicações são geradas

**Ações do Deck**
- [ ] "Gerar Outro Deck" cria novo deck diferente
- [ ] "Salvar Deck" adiciona ao perfil
- [ ] "Compartilhar" funciona (clipboard ou share)

#### 2. Dicas por Arena

- [ ] Dropdown de arenas funciona
- [ ] Dicas corretas são exibidas por arena
- [ ] Todas as 4 categorias de dicas aparecem
- [ ] Conteúdo é legível e formatado

#### 3. Metas Atuais

- [ ] Dropdown de arenas funciona
- [ ] Decks meta são exibidos corretamente
- [ ] Cartas dos decks aparecem com ícones
- [ ] Informações (dificuldade, elixir) corretas

#### 4. Treinador de Erros

- [ ] Todas as cartas do jogo estão disponíveis
- [ ] Adicionar carta ao deck funciona
- [ ] Máximo de 8 cartas respeitado
- [ ] Remover carta funciona (botão X)
- [ ] Botão analisar desabilitado até 8 cartas
- [ ] Análise identifica problemas corretamente
  - [ ] Detecta falta de defesa aérea
  - [ ] Detecta falta de construção
  - [ ] Detecta falta de feitiços
  - [ ] Detecta elixir muito alto/baixo
  - [ ] Detecta falta de tanque
- [ ] Sugestões são relevantes

#### 5. Perfil do Jogador

- [ ] Arena atual é exibida corretamente
- [ ] Contador de decks salvos está correto
- [ ] Decks salvos aparecem na lista
- [ ] Cartas dos decks salvos são visíveis
- [ ] Botão excluir remove deck
- [ ] Confirmação antes de excluir

### ✅ Testes de UI/UX

#### Navegação

- [ ] Menu principal funciona em todas as seções
- [ ] Menu mobile (hamburger) funciona
- [ ] Seção ativa é destacada no menu
- [ ] Scroll suave entre seções
- [ ] Logo clicável volta ao topo

#### Responsividade

**Desktop (>1200px)**
- [ ] Layout completo visível
- [ ] Grids de cartas com múltiplas colunas
- [ ] Sem quebras de layout

**Tablet (768px - 1200px)**
- [ ] Layout adaptado
- [ ] Elementos reorganizados adequadamente
- [ ] Texto legível

**Mobile (<768px)**
- [ ] Menu hamburguer aparece
- [ ] Cards empilhados verticalmente
- [ ] Botões e textos em tamanho adequado
- [ ] Scroll horizontal ausente
- [ ] Touch targets > 44px

#### Animações e Efeitos

- [ ] Hover effects funcionam em botões
- [ ] Transições suaves entre seções
- [ ] Cards animam ao aparecer na tela
- [ ] Glow effects visíveis
- [ ] Loading states (se aplicável)

### ✅ Testes de Performance

- [ ] Página carrega em < 3 segundos
- [ ] Geração de deck é instantânea
- [ ] Sem lag ao rolar página
- [ ] Animações são suaves (60fps)
- [ ] Sem memory leaks evidentes

### ✅ Testes de Compatibilidade

#### Navegadores

**Desktop**
- [ ] Chrome/Edge (Chromium) - Versão atual
- [ ] Firefox - Versão atual
- [ ] Safari - Versão atual (Mac)

**Mobile**
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Samsung Internet

#### Dispositivos

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (iPad - 768x1024)
- [ ] Mobile (iPhone - 375x667)
- [ ] Mobile (Android - 360x640)

### ✅ Testes de Dados

#### LocalStorage

- [ ] Decks são salvos corretamente
- [ ] Dados persistem após reload
- [ ] Dados persistem após fechar navegador
- [ ] Excluir deck remove do storage
- [ ] Limite de storage não é excedido

#### Validações

- [ ] Deck gerado sempre tem 8 cartas
- [ ] Cartas não se repetem no deck
- [ ] Média de elixir entre 2.5 e 5.0
- [ ] Composição respeita regras mínimas
- [ ] Cartas bloqueadas não aparecem

### ✅ Testes de Acessibilidade

- [ ] Textos têm contraste adequado (WCAG AA)
- [ ] Imagens têm alt text (ícones)
- [ ] Navegação por teclado funciona (Tab)
- [ ] Focus visível em elementos interativos
- [ ] Títulos hierárquicos corretos (h1, h2, h3)
- [ ] Botões têm labels descritivos
- [ ] Formulários têm labels associados

### ✅ Testes de Segurança

- [ ] Sem eval() ou execução de código dinâmico
- [ ] LocalStorage não armazena dados sensíveis
- [ ] Input validation em todos os campos
- [ ] XSS prevention (sanitização)
- [ ] Sem external scripts não confiáveis

## 🐛 Bugs Conhecidos

| ID | Descrição | Severidade | Status |
|----|-----------|------------|--------|
| - | Nenhum bug conhecido | - | - |

## 📝 Notas de Teste

### Ambiente de Teste Recomendado

```
OS: Windows 10/11, macOS 11+, Ubuntu 20.04+
Navegadores: Chrome 90+, Firefox 88+, Safari 14+
Resolução: 1920x1080 (desktop), 375x667 (mobile)
Conexão: Qualquer (site é estático)
```

### Ferramentas Úteis

- **Chrome DevTools**: Inspector, Network, Performance
- **Lighthouse**: Auditoria de performance e acessibilidade
- **BrowserStack**: Teste em múltiplos dispositivos
- **WAVE**: Teste de acessibilidade
- **PageSpeed Insights**: Performance geral

### Comandos Úteis

```bash
# Executar servidor local
python -m http.server 8000

# Verificar erros no console
# Abrir DevTools (F12) e ver tab Console

# Testar responsividade
# DevTools > Toggle device toolbar (Ctrl+Shift+M)
```

## ✅ Checklist de Deploy

Antes de publicar:

- [ ] Todos os testes acima passaram
- [ ] README.md atualizado
- [ ] Versão incrementada (package.json se existir)
- [ ] Sem console.logs desnecessários
- [ ] Arquivos minificados (opcional)
- [ ] Meta tags SEO configuradas
- [ ] Favicon adicionado (opcional)
- [ ] Analytics configurado (opcional)
- [ ] Backup dos dados realizados

## 📊 Métricas de Qualidade

### Metas

| Métrica | Meta | Status Atual |
|---------|------|--------------|
| Tempo de Carregamento | < 3s | ✅ |
| Performance Score | > 90 | ✅ |
| Accessibility Score | > 85 | ✅ |
| Best Practices Score | > 90 | ✅ |
| SEO Score | > 85 | ✅ |
| Bundle Size | < 100KB | ✅ |

### Como Medir

1. Abra o Chrome DevTools (F12)
2. Vá para a aba "Lighthouse"
3. Clique em "Generate report"
4. Verifique os scores

## 🔄 Ciclo de Testes

```
Desenvolvimento → Testes Locais → Review → Correções → Deploy
      ↑                                                    ↓
      └────────────────── Feedback ──────────────────────┘
```

---

**Última Atualização**: 2026-02-04  
**Versão do Documento**: 1.0.0  
**Responsável**: Equipe de Desenvolvimento
