 # Text-To-Speech

 Conversão de texto em áudio usando API Text to Speech do IBM Watson.



## Description

Desenvolver uma aplicação web em Node.js com banco de dados MySQL. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.

 

## Tecnologies

- [Node.js](https://nodejs.org/) 

- [Express.js](https://expressjs.com/pt-br/)

- [Typescript](https://www.typescriptlang.org/)

- [TypeORM](https://typeorm.io/#/)

- [Mysql](https://www.mysql.com/)

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)

- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)



## Getting Started/Project Setup

* Acessar com o terminal a pasta do projeto e executar`npm install`para instalar todas as dependências.

* Abrir o arquivo `.env` e preencher com as respectivas informações:

  ```
  PORT = 3000
  
  ## BANCO DE DADOS
  BD_HOST = 
  BD_USERNAME = 
  BD_PASS = 
  BD = 
  
  ## IBM Text to Speech
  apikey = 
  serviceUrl = 
  ```


* No terminal, executar: `yarn typeorm migration:run` para criar o Banco de Dados.



### Executing program

* No terminal executar `yarn dev` e PRONTO! 
* No navegador acesse http://localhost:3000/index (ou a porta de preferência) para ver o funcionamento.
