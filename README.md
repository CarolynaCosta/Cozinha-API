# 🍳 Cozinha API

API simples de receitas, criada para o projeto **Cozinha App** — um aplicativo capaz de **reconhecer alimentos pela câmera** e **exibir receitas** relacionadas automaticamente.

---

## 🧩 Sobre o Projeto

O objetivo da **Cozinha API** é fornecer dados de receitas de forma rápida e gratuita, para ser consumida por aplicações que precisam exibir receitas baseadas em um ingrediente principal.

O **Cozinha App**, que consome esta API, utiliza inteligência artificial (Clarifai) para identificar o alimento na imagem e, em seguida, faz uma requisição para esta API.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Vercel** (hospedagem)
- **JSON** (base de dados)
- **Git & GitHub**

---

## 📁 Estrutura do Projeto

```
📦 cozinha-api
├── 📂 api
│   └── receitas.json   # Base de dados das receitas
├── 📄 package.json      # Configurações do projeto
└── 📄 vercel.json       # Configuração de deploy na Vercel
```

---

## 🌐 Endpoint

A API está disponível publicamente em:

```
https://cozinha-api.vercel.app/api/receitas
```

### Exemplo de uso:
```bash
GET https://cozinha-api.vercel.app/api/receitas?alimento=banana
```

---

## 🧠 Exemplo de resposta

```json
[
  {
    "id": 1,
    "titulo": "Vitamina de Banana",
    "ingredientes": [
      "2 bananas maduras",
      "1 copo de leite",
      "1 colher de mel"
    ],
    "modo_preparo": "Bata tudo no liquidificador até ficar cremoso."
  }
]
```

---

## 💡 Autor

Desenvolvido por **Carolyna Costa**  
💻 Projeto acadêmico – *Análise e Desenvolvimento de Sistemas*  
📅 2025

---
✨ *Simples, funcional e delicioso!*
