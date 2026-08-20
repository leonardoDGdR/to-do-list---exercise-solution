# B-Productive — Exercício 2.2

Aplicação web de **listas de tarefas** (to-do lists) construída com Node.js, Express e EJS,
seguindo a organização MVC. Exercício do curso de Node.js da One Bit Code.

## Funcionalidades

- Listar todas as listas de tarefas
- Criar uma nova lista
- Excluir uma lista
- Visualizar as tarefas de uma lista
- Adicionar uma tarefa a uma lista
- Marcar uma tarefa como concluída e desfazer a conclusão

> Os dados ficam **em memória** (array no model). Ao reiniciar o servidor, tudo volta ao estado inicial.

## Tecnologias

- [Node.js](https://nodejs.org/) (testado na v20)
- [Express](https://expressjs.com/) 5.2.1
- [EJS](https://ejs.co/) 6.0.1 como template engine
- [Bootstrap 5.3](https://getbootstrap.com/) via CDN para o visual

## Como executar

```bash
# instalar as dependências
npm install

# iniciar o servidor
npm run dev
```

Depois acesse <http://localhost:3000>.

A porta pode ser alterada pela variável de ambiente `PORT`:

```bash
PORT=4000 npm run dev
```

## Estrutura do projeto

```
src/
├── server.js                      # configuração e inicialização do Express
├── routes.js                      # definição das rotas (express.Router)
├── controller/
│   └── taskListController.js      # recebe as requisições e devolve as respostas
├── models/
│   └── taskListModel.js           # regras de negócio e armazenamento em memória
└── views/
    ├── index.ejs                  # página inicial (landing page)
    ├── app.ejs                    # todas as listas de tarefas
    ├── create.ejs                 # formulário de nova lista
    ├── show.ejs                   # tarefas de uma lista
    └── partials/
        ├── header.ejs             # navbar
        └── footer.ejs             # rodapé e script do Bootstrap
```

## Rotas

| Método | Rota                              | Descrição                          |
| ------ | --------------------------------- | ---------------------------------- |
| GET    | `/`                               | Página inicial                     |
| GET    | `/app`                            | Lista todas as listas de tarefas   |
| GET    | `/app/nova-lista`                 | Formulário de criação de lista     |
| POST   | `/app/nova-lista`                 | Cria uma nova lista                |
| GET    | `/app/:id`                        | Exibe as tarefas de uma lista      |
| POST   | `/app/:id/excluir`                | Exclui uma lista                   |
| POST   | `/app/:id/nova-tarefa`            | Adiciona uma tarefa à lista        |
| POST   | `/app/:listId/completar/:taskId`  | Marca a tarefa como concluída      |
| POST   | `/app/:listId/desfazer/:taskId`   | Desfaz a conclusão da tarefa       |