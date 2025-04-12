# 🛍️ Projeto S&A Store - Loja Virtual em React

Este é um projeto acadêmico de uma **loja virtual funcional**, desenvolvido com **React**, **Tailwind CSS** e **Vite**. Ele simula uma plataforma de compras com carrinho, filtros por categoria, checkout e uma **interface totalmente responsiva** — adaptada para desktop e dispositivos móveis.

## 🌐 Acesse o projeto online

🔗 [Clique aqui para acessar o site](https://s-a-eight.vercel.app/)

## 📝 Descrição

Este projeto foi pensado para consolidar conhecimentos em **desenvolvimento frontend com React** e boas práticas de responsividade e usabilidade.

### Funcionalidades principais:

- Carrinho de compras com **Context API**
- Filtros por categorias (masculino, feminino, todos)
- Checkout com validação de formulário
- Layout responsivo (mobile-first)
- Ocultação de scrolls e UX refinada

## ⚙️ Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- FontAwesome
- JavaScript (ES6+)

## 💡 Destaques técnicos

- **Responsividade total** com Tailwind (Mobile-first + breakpoints)
- **Validação de formulário nativa** com controle via `ref` e `checkValidity()`
- **Carrinho dinâmico** com controle global de estado via Context API
- **Ocultação inteligente da scrollbar no carrinho** em desktops e tablets
- **Componentização** e uso extensivo de props para reaproveitamento de lógica

## 📂 Estrutura do Projeto

```plaintext
S-A/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/  # Logos, imagens dos produtos
│   ├── components/
│   │   ├── Cart/  # Lógica e visual do carrinho
│   │   ├── Header.jsx
│   │   └── UserButtons.jsx
│   ├── contexts/
│   │   └── CartContext.jsx  # Estado global do carrinho
│   ├── pages/
│   │   ├── Homepage/
│   │   │   ├── Home.jsx
│   │   │   └── MainSection.jsx
│   │   ├── ProductFilters.jsx
│   │   ├── ProductsContainer.jsx
│   │   ├── CheckoutPage/
│   │       └── Checkout.jsx
│   │   
│   ├── utils/
│   │   ├── catalog.js
│   │   └── FormInput.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── tailwind.config.js
├── package.json
├── vite.config.js
└── README.md
```


## 🛠️ Como rodar o projeto localmente

1. Clone o repositório  
```

   git clone https://github.com/Diogo-seabra/S-A.git
```
2. Acesse o diretório  
```

   cd S-A
```
3. Instale as dependências  
```

   npm install
```

4. Rode o servidor de desenvolvimento  
```

   npm run dev
```
5. Acesse a aplicação  
   Abra o navegador em `http://localhost:5173`

## 📱 Responsividade

A aplicação foi testada no **Samsung Galaxy S22 (6.1")**, além de notebooks e monitores maiores. A estrutura mobile prioriza:

- Redução de scroll horizontal
- Distribuição das seções em coluna
- Separadores entre seções
- Scroll liberado apenas em telas pequenas
- Ajustes com `svh`, `overflow-auto` e ocultação de scrollbar

## 📸 Demonstrações

**Home e Filtros:**

![Home](https://github.com/user-attachments/assets/789bc899-df64-4874-bd93-d7be8ec55679)

**Checkout em desktop:**
![Checkout-PC](https://github.com/user-attachments/assets/b971f8b0-5180-4ddf-b8d0-cdd49fc2fa75)

**Checkout em dispositivos móveis:**

<img src="./src/assets/media/Checkout-Mobile.gif" alt="Checkout mobile responsivo" width="300" />

## 🫂 Contribuições

Contribuições são bem-vindas!  
Você pode abrir uma issue ou enviar um pull request com melhorias, sugestões ou correções.

## 👨‍💻 Autor

**Diogo Seabra**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/diogo-seabra-/)

---

Este projeto foi feito com foco em aprendizado, mas está pronto para servir como base para aplicações reais.  
Sinta-se à vontade para explorar, clonar e adaptar!


