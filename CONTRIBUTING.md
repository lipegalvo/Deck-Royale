# 🤝 Guia de Contribuição - Deck Royale

Obrigado por considerar contribuir com o **Deck Royale**! 🎉

Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Diretrizes de Desenvolvimento](#diretrizes-de-desenvolvimento)
- [Processo de Pull Request](#processo-de-pull-request)
- [Padrões de Código](#padrões-de-código)
- [Estrutura de Commits](#estrutura-de-commits)

## 📜 Código de Conduta

Este projeto adere a um Código de Conduta. Ao participar, você concorda em seguir estas diretrizes:

- ✅ Seja respeitoso e inclusivo
- ✅ Aceite críticas construtivas
- ✅ Foque no que é melhor para a comunidade
- ✅ Demonstre empatia com outros membros
- ❌ Não use linguagem ofensiva
- ❌ Não faça ataques pessoais
- ❌ Não compartilhe conteúdo inapropriado

## 🎯 Como Posso Contribuir?

### 🐛 Reportar Bugs

Encontrou um bug? Ajude-nos abrindo uma **issue**!

**Antes de reportar:**
1. Verifique se o bug já não foi reportado
2. Certifique-se de que está usando a versão mais recente
3. Tente reproduzir o bug em outro navegador

**Ao reportar, inclua:**
- 📝 Descrição clara do problema
- 🔄 Passos para reproduzir
- 🎯 Comportamento esperado vs real
- 📸 Screenshots (se aplicável)
- 💻 Navegador e versão
- 📱 Dispositivo (se mobile)

**Template de Issue (Bug):**
```markdown
## Descrição do Bug
[Descrição clara e concisa]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja erro

## Comportamento Esperado
[O que deveria acontecer]

## Screenshots
[Se aplicável]

## Ambiente
- Navegador: [ex: Chrome 90]
- OS: [ex: Windows 10]
- Versão: [ex: 1.0.0]
```

### ✨ Sugerir Funcionalidades

Tem uma ideia para melhorar o projeto?

**Template de Issue (Feature):**
```markdown
## Descrição da Funcionalidade
[Descrição clara da funcionalidade sugerida]

## Problema que Resolve
[Que problema esta funcionalidade resolve?]

## Solução Proposta
[Como você imagina que funcionaria?]

## Alternativas Consideradas
[Outras soluções que você pensou]

## Contexto Adicional
[Screenshots, mockups, exemplos]
```

### 💻 Contribuir com Código

#### Tipos de Contribuições Bem-Vindas

1. **Correção de Bugs** 🐛
   - Corrigir bugs reportados
   - Melhorar tratamento de erros

2. **Novas Funcionalidades** ✨
   - Adicionar novas cartas
   - Implementar novos algoritmos
   - Criar novas seções

3. **Melhorias de UI/UX** 🎨
   - Melhorar design
   - Adicionar animações
   - Otimizar responsividade

4. **Performance** ⚡
   - Otimizar código
   - Reduzir bundle size
   - Melhorar velocidade

5. **Documentação** 📚
   - Melhorar README
   - Adicionar comentários
   - Criar tutoriais

6. **Testes** 🧪
   - Adicionar testes automatizados
   - Melhorar cobertura de testes

## 🛠 Diretrizes de Desenvolvimento

### Pré-requisitos

- Conhecimento de HTML5, CSS3, JavaScript ES6+
- Git instalado
- Editor de código (VS Code recomendado)
- Navegador moderno para testes

### Setup do Ambiente

```bash
# 1. Fork o repositório no GitHub

# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/deck-royale.git
cd deck-royale

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/ORIGINAL/deck-royale.git

# 4. Crie uma branch para sua feature
git checkout -b feature/minha-feature

# 5. Abra o projeto
# Abra index.html no navegador OU use servidor local
python -m http.server 8000
```

### Estrutura de Branches

```
main (produção, estável)
├── develop (desenvolvimento)
│   ├── feature/nova-funcionalidade
│   ├── bugfix/correcao-bug
│   ├── hotfix/correcao-urgente
│   └── docs/documentacao
```

**Nomenclatura de Branches:**
- `feature/nome-da-feature` - Novas funcionalidades
- `bugfix/nome-do-bug` - Correções de bugs
- `hotfix/nome-do-hotfix` - Correções urgentes
- `docs/nome-da-doc` - Documentação
- `refactor/nome` - Refatoração de código
- `test/nome` - Adição de testes

## 🔀 Processo de Pull Request

### Antes de Submeter

1. ✅ **Teste localmente**
   - Verifique em múltiplos navegadores
   - Teste responsividade
   - Sem erros no console

2. ✅ **Código limpo**
   - Remova console.logs desnecessários
   - Comente código complexo
   - Siga padrões do projeto

3. ✅ **Documentação**
   - Atualize README se necessário
   - Adicione comentários em código novo
   - Atualize CHANGELOG

4. ✅ **Commits organizados**
   - Commits atômicos e descritivos
   - Siga padrão de mensagens

### Submeter Pull Request

1. **Atualize sua branch**
```bash
git fetch upstream
git rebase upstream/main
```

2. **Push para seu fork**
```bash
git push origin feature/minha-feature
```

3. **Abra Pull Request no GitHub**

**Template de Pull Request:**
```markdown
## Descrição
[Descrição clara das mudanças]

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como Foi Testado?
[Descreva os testes realizados]

## Checklist
- [ ] Código segue padrões do projeto
- [ ] Comentários adicionados onde necessário
- [ ] Documentação atualizada
- [ ] Sem warnings no console
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Testado em mobile
- [ ] CHANGELOG atualizado
```

### Review Process

1. Mantenedor revisa o código
2. Pode solicitar mudanças
3. Você faz ajustes e atualiza PR
4. Após aprovação, PR é mergeado
5. Sua branch pode ser deletada

## 📝 Padrões de Código

### JavaScript

```javascript
// ✅ BOM
class DeckGenerator {
    generateDeck(arena, style, favorites) {
        // Comentário explicativo se necessário
        const cards = this.filterCardsByArena(arena);
        return this.buildDeck(cards, style, favorites);
    }
}

// ❌ RUIM
function gD(a,s,f){const c=fC(a);return bD(c,s,f);}
```

**Convenções:**
- Use `camelCase` para variáveis e funções
- Use `PascalCase` para classes
- Use `UPPER_CASE` para constantes
- Nomes descritivos e em inglês
- Funções pequenas e focadas
- Evite aninhamento profundo (max 3 níveis)

### CSS

```css
/* ✅ BOM */
.deck-card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.deck-card:hover {
    transform: translateY(-5px);
}

/* ❌ RUIM */
.dc{display:flex;padding:1rem;border-radius:12px}
```

**Convenções:**
- Use classes semânticas
- Prefira Flexbox/Grid
- Mobile-first media queries
- Agrupe propriedades relacionadas
- Use variáveis CSS para cores

### HTML

```html
<!-- ✅ BOM -->
<section class="deck-builder" aria-label="Construtor de Deck">
    <h2>Monte Seu Deck</h2>
    <button class="generate-btn" onclick="generateDeck()">
        <i class="fas fa-magic"></i>
        <span>Gerar Deck</span>
    </button>
</section>

<!-- ❌ RUIM -->
<div class="db"><div class="h">Monte Seu Deck</div><div onclick="gD()">Gerar</div></div>
```

**Convenções:**
- Tags semânticas
- Atributos aria para acessibilidade
- Indentação consistente
- Nomes de classes descritivas

## 📋 Estrutura de Commits

### Formato

```
tipo(escopo): descrição curta

Descrição detalhada (opcional)

Closes #123
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Tarefas de manutenção

### Exemplos

```bash
# Boa
feat(deck): adiciona algoritmo de balanceamento de elixir
fix(ui): corrige bug de seleção de cartas em mobile
docs(readme): atualiza instruções de instalação

# Ruim
update code
fix bug
changes
```

## 🧪 Testes

Antes de submeter PR:

1. **Testes Manuais**
   - [ ] Funcionalidade funciona conforme esperado
   - [ ] Sem erros no console
   - [ ] Responsivo em mobile
   - [ ] Funciona em Chrome, Firefox, Safari

2. **Checklist de Qualidade**
   - [ ] Código segue padrões
   - [ ] Comentários onde necessário
   - [ ] Sem código duplicado
   - [ ] Performance adequada

## 📚 Recursos Úteis

- [Documentação MDN](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

## ❓ Dúvidas?

- 📧 Abra uma issue com a tag `question`
- 💬 Entre em contato através do GitHub

## 🎉 Obrigado!

Toda contribuição, grande ou pequena, é valiosa!

Juntos tornamos o **Deck Royale** melhor! 🏆

---

**Última Atualização**: 2026-02-04  
**Versão**: 1.0.0
