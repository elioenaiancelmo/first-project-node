

<h1 align="center">
  Desafio Node
</h1>

 > Primeiro Desafio de Node.js feito no Curso DevClub

## :rocket: Sobre o desafio

Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /order`: A rota deve receber o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }`. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".


- `GET /order`: Rota que lista todos os pedidos já feitos.

- `PUT /order/:id`: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O `id` do pedido deve ser enviado nos parâmetros da rota.

- `DELETE /order/:id`: Essa rota deve deletar um pedido já feito com o `id` enviado nos parâmetros da rota.

- `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e deve retornar um pedido específico.

- `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".


### Exemplo

Se eu chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```


Se eu chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.

### Exemplo
[GET] - /order

### Rodando o projeto pelo Insomnia

 projeto:

 <img src="./assets/project-node.gif" alt="video rodado o projeto pelo Insomnia">

### Technologies 

Neste projeto foram utilizadas as seguintes ferramentas:

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### Colaboradores

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/elioenaiancelmo">
            <img src="./assets/perfil.jpg" width="100px;" alt="Foto de Elioenai Ancelmo">
            <br>
            <sub>
                <b>Elioenai Ancelmo</b>
            </sub>
            </a>
        </td>
        <td align="center">
            <img src="./assets/LogoDevClub.png" width="130px;" alt="Logo DevClub"/><br>
            <sub>
                <b>DevClub</b>
            </sub>
    </tr>
</table>

<a href="#top">Back to top</a>

