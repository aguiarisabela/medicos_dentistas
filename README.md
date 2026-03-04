# 🏥 Médicos & Dentistas - Conectando Cuidado

O **Médicos & Dentistas** é um projeto web desenvolvido para uma organização fictícia de voluntariado. O objetivo da plataforma é facilitar a conexão entre profissionais da saúde (médicos e dentistas) e comunidades que necessitam de atendimento, oferecendo um espaço para inscrições em palestras, mentorias e gestão de doações.

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com fins educacionais durante o programa **Vai na Web**. O foco principal foi o aprendizado prático e a integração de dependências essenciais do ecossistema React, explorando desde a arquitetura de rotas até a estilização avançada e modular.

---

## 🛠️ Tecnologias e Dependências

Para construir esta aplicação, foram utilizadas as seguintes ferramentas:

* **React (Vite):** Ambiente de desenvolvimento ultra-rápido para uma experiência de codificação moderna.
* **React Router Dom:** Gerenciamento de navegação entre páginas (Home, Eventos, Perfil) em uma Single Page Application (SPA).
* **Sass (SCSS):** Pré-processador CSS utilizado para organizar estilos com variáveis, aninhamento (nesting) e mixins.
* **CSS Modules:** Técnica de estilização para garantir que os estilos de um componente (como o `Footer` ou `Header`) sejam isolados, evitando conflitos globais.
* **React Icons:** Biblioteca de ícones (especificamente o conjunto *Circum Icons*) para uma interface limpa e intuitiva.
---

## 📱 Funcionalidades

* **Responsividade Total:** Interface adaptável para dispositivos móveis, tablets e desktops.
* **Navegação Dinâmica:** Troca de páginas fluida sem recarregamento do navegador.
* **Feedback de Interação:** Notificações em tempo real ao clicar em botões de ação nos cards.
* **Footer Informativo:** Seção de contato e redes sociais com ícones vetorizados e links organizados.

---

## 📁 Estrutura de Arquivos Principal

```text
src/
 ├── assets/          # Imagens e logo do projeto
 ├── components/      # Componentes reutilizáveis (Card, Footer, Navbar)
 │    └── footer/
 │         ├── Footer.jsx
 │         └── footer.module.scss
 ├── pages/           # Visões principais (Home, User, Eventos)
 ├── styles/          # Estilos globais e variáveis SCSS
 ├── App.jsx          # Configuração das Rotas (Router)
 └── main.jsx         # Renderização e ToastContainer

```

---

## 👩‍💻 Autora

Desenvolvido por **Isabela** como parte dos estudos de desenvolvimento Front-end.
