

<h1 align="center">Cadastro de Usuários </h1>

Este projeto é um sistema de cadastro de usuários desenvolvido com React, Styled Components e MongoDB. O sistema permite o cadastro, visualização e exclusão de usuários de forma simples e intuitiva, oferecendo uma interface responsiva e eficiente.

A aplicação utiliza uma API RESTful para gerenciar os dados dos usuários e se comunica com o banco de dados MongoDB para armazenar e recuperar as informações.

# Tecnologias Utilizadas

● React - Biblioteca JavaScript para construção da interface do usuário.
<br>
● Styled Components - Biblioteca para estilização de componentes de forma modular e reutilizável.
<br>
● Axios - Cliente HTTP para fazer requisições à API.
<br>
● MongoDB - Banco de dados NoSQL para armazenar os dados dos usuários.
<br>
● Node.js (no back-end) - Ambiente de execução JavaScript para a API.
<br>
● Express (no back-end) - Framework para criar a API RESTful.
<br>
● React Router - Biblioteca para navegação entre as páginas da aplicação.

# Funcionalidades

● Cadastro de usuários (inclui nome, idade e e-mail).
<br>
● Listagem de usuários cadastrados.
<br>
● Exclusão de usuários.
<br>
● Interface responsiva adaptada para diferentes dispositivos.
<br>
● Conexão com a API RESTful para gerenciar os dados dos usuários no banco de dados MongoDB.


# Estrutura do Projeto

```plaintext
├── backend/           # Contém a API RESTful e a lógica de interação com o banco de dados
│   ├── controllers/   # Controladores para as operações CRUD
│   ├── models/        # Modelos de dados, incluindo a estrutura do usuário no MongoDB
│   ├── routes/        # Definições das rotas da API
│   ├── server.js      # Arquivo principal do servidor Express
│
├── frontend/          # Contém a aplicação React
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis (botões, cards, etc.)
│   │   ├── pages/      # Páginas da aplicação (Home, Listagem de Usuários)
│   │   ├── services/   # Serviços de comunicação com a API
│   │   ├── App.js      # Componente principal da aplicação
│   │   ├── index.js    # Arquivo de entrada
│   │   └── styles/     # Arquivos de estilo (global e componentes)
│   └── public/
│       └── index.html
├── .env               # Variáveis de ambiente para configuração do banco de dados
├── package.json       # Dependências e scripts do projeto
└── README.md          # Este arquivo
````


# Como Rodar o Projeto

## 1. Backend (API RESTful)

Para rodar a API:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-cadastro-usuarios.git
    ```
2. Navegue até a pasta do backend:
    ```bash
    cd backend
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Crie um arquivo `.env` na raiz do diretório do backend com a URL de conexão do MongoDB:
    ```env
    MONGODB_URI=mongodb://localhost:27017/cadastro_usuarios
    ```
5. Inicie o servidor:
    ```bash
    npm start
    ```
    A API estará rodando em [http://localhost:3000](http://localhost:3000).

## 2. Frontend (Aplicação React)

Para rodar o frontend:

1. Navegue até a pasta do frontend:
    ```bash
    cd frontend
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
    A aplicação React estará disponível em [http://localhost:3001](http://localhost:3001).

## Funcionalidade de Exclusão

Ao clicar no ícone de lixo em qualquer card de usuário, o sistema fará uma requisição DELETE à API para remover o usuário da base de dados e atualizar a lista na interface.

## Desafios e Aprendizados

Durante o desenvolvimento deste projeto, pude consolidar diversos conceitos importantes:

- Integração front-end e back-end usando React e API RESTful.
- Como trabalhar com o banco de dados MongoDB utilizando operações CRUD.
- A criação de uma interface responsiva com Styled Components.
- Gerenciamento de rotas e navegação com React Router.

Este projeto foi um grande aprendizado para fortalecer minhas habilidades em desenvolvimento full-stack.


<div>
 <img alt="Home page" src="https://github.com/lbastoss/project-cadastro-usuarios/blob/main/src/assets/cadastro%20de%20usuarios.png" width="500" />
  <figcaption> <p bold >Pagina de cadstro</p> </figcaption>
 
 <img alt="Home page" src="https://github.com/lbastoss/project-cadastro-usuarios/blob/main/src/assets/cadastro%20de%20usuarios%20lista.png" width="500" />
  <figcaption> <p>Usuários cadstrados</p> </figcaption>


</div>
