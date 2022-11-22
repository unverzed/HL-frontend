<div align="center">
<h1>HubLocal 🚀 </h1>
  </div>

<h2>Sobre o projeto:</h2>
<p>Projeto feito para o processo seletivo da HubLocal para Fullstack Jr, foi solicitado que fosse implementado uma aplicação onde é possível criar e logar com um usuário, criar uma empresa, responsáveis, locais e enviar tickets para outros usuários no sistema.</p>
<p>Observações: O projeto está incompleto até o UPDATE de Locais, não consegui implementar o endpoint utilizando Transactions em SQL puro. </p>
  
<h2>Rotas:</h2>

```yml 
POST /signup
    - Usuário cria uma conta
    - headers: {}
    - body:{
        "name": "user",
        "email": "user@gmail.com",
        "password": "senhasecreta",
    } 
```

```yml 
POST /
    - Usuário loga em sua conta
    - headers: {}
    - body:{
       "email": "user@gmail.com",
       "password": "user00"
   }    
```

```yml 
POST /company
    - Usuário cria uma empresa
    - headers: "Authorization": "Bearer $token"
    - body:{
      "name": "HubLocal",
      "CNPJ": "85635809000142",
      "description": "Base dos Hubnautas",
    } 
```
```yml 
GET /company/:id
    - Retorna todas as empresas do usuário
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 
PUT /company/:id
    - Edita as informações da empresa
    - headers: "Authorization": "Bearer $token"
    - body:{
      "name": "HubLocal",
      "CNPJ": "85635809000142",
      "description": "Base dos Hubnautas",
     } 
```

```yml 
DELETE /company:id
    - Deleta as informações da empresa
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 

POST /responsibles/:id
    - Adiciona informação do responsável 
    - headers: "Authorization": "Bearer $token"
    - body:{
      "name": "Vivi",
      "phone": "8834076780",
      "CEP": "60160250",
      "neighborhood": "Bela Vista",
      "street": "R.Pereira Valente",
      "number": 100,
      "city": "Fortaleza",
      "state": "CE",
      "isMainResponsible": true
     } 
```

```yml 

POST /places/:id/responsibles/:id2
    - Adiciona um local
    - headers: "Authorization": "Bearer $token"
    - body:{
      "name": "Local da Vivi",
      "CEP": "60160250",
      "neighborhood": "Bela Vista",
      "street": "R.Pereira Valente",
      "number": 100,
      "city": "Fortaleza",
      "state": "CE"
    }
```

```yml 

GET /places/:id
    - Retorna um local
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 

GET /allplaces/:id
    - Retorna todos os locais cadastrados
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```

```yml 

DELETE /places/:id
    - Deleta um local
    - headers: "Authorization": "Bearer $token"
    - body:{} 
```



<h2>Como rodar a aplicação:</h2>

<h3>Clone o repositório:</h3>

```
$ git clone https://github.com/unverzed/HL-frontend.git
```

<h3>Installe as dependências:</h3>

```
$ npm ou yarn install
```

<h3>Inicie a API:</h3>

```
$ npm start
```

