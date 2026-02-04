# 🚀 Guia Rápido de Início - Deck Royale

## ⚡ Início Rápido em 30 Segundos

### Opção 1: Abrir Diretamente (Mais Fácil)

1. **Baixe o projeto completo**
2. **Abra `index.html` no navegador**
3. **Pronto!** 🎉

### Opção 2: Com Servidor Local

```bash
# Na pasta do projeto
python -m http.server 8000

# Abra no navegador
http://localhost:8000
```

---

## 📱 Como Usar o Site

### 1️⃣ Gerar Seu Primeiro Deck

1. Clique em uma **Arena** (exemplo: Arena de Treinamento)
2. (Opcional) Escolha seu **Estilo de Jogo** (exemplo: Agressivo)
3. (Opcional) Selecione até **4 cartas favoritas**
4. Clique em **"GERAR MEU DECK"** 🎯
5. Veja seu deck com todas as explicações!

### 2️⃣ Salvar um Deck

1. Após gerar um deck
2. Clique em **"Salvar Deck"** 💾
3. Vá para **"Perfil"** no menu
4. Seus decks salvos estarão lá!

### 3️⃣ Ver Dicas para Sua Arena

1. Clique em **"Dicas por Arena"** no menu
2. Selecione sua arena atual
3. Leia dicas sobre:
   - ❌ Erros comuns
   - ⭐ Cartas fortes
   - ♟️ Estratégia
   - 👥 Inimigos comuns

### 4️⃣ Conferir Decks Meta

1. Clique em **"Metas Atuais"**
2. Escolha a arena
3. Veja os decks mais populares

### 5️⃣ Analisar Seu Próprio Deck

1. Vá para **"Treinador de Erros"**
2. Clique em 8 cartas para montar seu deck
3. Clique em **"Analisar Deck"** 🔬
4. Receba feedback detalhado sobre:
   - ⚠️ Problemas no deck
   - ✅ Pontos fortes
   - 💡 Sugestões de melhoria

---

## 🎮 Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl/Cmd + G` | Gerar Deck |
| `F5` | Recarregar página |
| `Tab` | Navegar entre elementos |

---

## 💡 Dicas Pro

### Para Iniciantes (Arena 0-5)

- ✅ Use decks com média de elixir entre **3.0 - 3.5**
- ✅ Sempre tenha **1 feitiço de área** (Flechas, Zap)
- ✅ Priorize cartas **comuns e raras** (mais fáceis de upar)
- ✅ Aprenda a **defender primeiro, atacar depois**

### Para Intermediários (Arena 6-10)

- ✅ Experimente diferentes **estilos de jogo**
- ✅ Salve múltiplos decks para **diferentes situações**
- ✅ Use o **Treinador de Erros** para refinar seus decks
- ✅ Estude os **decks meta** da sua arena

### Para Avançados (Arena 11+)

- ✅ Otimize a **média de elixir** para seu estilo
- ✅ Domine **combos específicos** do seu deck
- ✅ Adapte-se rapidamente ao **meta atual**
- ✅ Use cartas favoritas que você já tem **upadas**

---

## ❓ Perguntas Frequentes

### O deck gerado é sempre o mesmo?

**Não!** O algoritmo cria decks diferentes a cada vez, mesmo com os mesmos parâmetros, garantindo variedade.

### Posso usar o site offline?

Sim! Depois de carregar uma vez, você pode usar offline. (Obs: funcionalidades futuras podem requerer conexão)

### Quantos decks posso salvar?

**Ilimitado!** Todos são salvos no seu navegador (localStorage).

### O site funciona no celular?

**Sim!** 📱 O site é totalmente responsivo e funciona perfeitamente em smartphones e tablets.

### As cartas são atualizadas?

A versão atual contém 54+ cartas. Atualizações futuras adicionarão novas cartas conforme o jogo evolui.

### Posso compartilhar meus decks?

**Sim!** Use o botão "Compartilhar" para copiar o deck como texto ou compartilhar em redes sociais.

---

## 🎯 Primeiros Passos Recomendados

### Dia 1: Exploração
- ✅ Gere 3-5 decks diferentes
- ✅ Teste estilos de jogo variados
- ✅ Leia dicas da sua arena

### Dia 2: Análise
- ✅ Use o Treinador de Erros com seu deck atual
- ✅ Compare com decks meta
- ✅ Identifique pontos fracos

### Dia 3: Otimização
- ✅ Crie deck personalizado com cartas favoritas
- ✅ Salve múltiplas variações
- ✅ Teste no jogo real!

---

## 🔧 Resolução de Problemas

### O site não carrega?

1. Verifique se todos os arquivos estão na pasta correta
2. Abra o Console do navegador (F12) e veja erros
3. Tente outro navegador

### Deck não está sendo gerado?

1. Certifique-se de selecionar uma **arena**
2. Limpe o cache do navegador
3. Recarregue a página (F5)

### Decks salvos sumiram?

1. Você limpou os dados do navegador?
2. Está usando o mesmo navegador?
3. LocalStorage pode ter limite (raro)

### Layout quebrado no mobile?

1. Certifique-se de ter conexão (para carregar fontes CDN)
2. Rotacione o dispositivo
3. Atualize a página

---

## 📚 Recursos Adicionais

### Documentação Completa
📄 Leia `README.md` para detalhes técnicos completos

### Testes
🧪 Veja `TESTING.md` para checklist de testes

### Código
💻 Explore os arquivos em `js/` para entender a lógica

---

## 🎨 Personalização Rápida

### Mudar Cores

Edite `css/style.css` linha ~9:

```css
:root {
    --primary: #6366f1;    /* Mude para sua cor */
    --gold: #fbbf24;       /* Cor de destaque */
}
```

### Adicionar Carta

Edite `js/data.js` no array `CARDS`:

```javascript
{
    id: 999,
    name: "Minha Carta",
    type: "troop",
    category: "tank",
    elixir: 5,
    icon: "🎯",
    unlockedArena: 0,
    rarity: "rare"
}
```

---

## 🎉 Você Está Pronto!

Agora você sabe tudo para começar a usar o **Deck Royale**!

### Próximos Passos:

1. ✅ Gere seu primeiro deck
2. ✅ Teste no Clash Royale
3. ✅ Volte e refine
4. ✅ Suba de arena! 🏆

---

## 💬 Feedback

Encontrou um bug ou tem uma sugestão?
- Abra uma **issue** no repositório
- Ou contribua com um **pull request**!

---

<div align="center">
    <strong>🏆 Boa sorte nas batalhas! 🏆</strong>
    <br><br>
    <em>Que seus decks sejam sempre balanceados e suas vitórias frequentes!</em>
</div>

---

**Deck Royale** - Versão 1.0.0  
**Última Atualização**: 2026-02-04
