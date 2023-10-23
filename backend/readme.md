# Points_News
Esse é o backend da api de notícias onde será apresentado aos usuários artigos, e também cadastrar e gerenciar as notícias.    NODE+EXPRESS

--------------------

# Backend do Projeto

Este é o backend do projeto API de notícia. Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento.

## Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend da Livraria.

### 1. Clone o Repositório


```bash
git clone https://github.com/Felipe-S-Leite/api-noticias.git
```
### 2.1 Configure o Backend NODE + EXPRESS
```powershell

cd libraryApp/backend

npm install express --save
npm install -g nodemon
npm install --save sequelize
npm install --save body-parser
npm install --save mysql2
npm install --save-dev sequelize-cli
npm install dotenv

npx sequelize db:create
npx sequelize db:migrate
```