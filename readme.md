# Processos para utilização

Esta API usa knex para controle de BD
    Usamos o postgres que tem sua conexão configurada no arquivo knexfile.js
        
        database: crud
            -> caso queira mudar a database, favor editar o arquivo knexfile no campo database.

# Crud

Como o projeto é relativamente "simples" com um CRUD unico no caso o "tools", optei por deixar tudo em uma unica tebala afim de facilitar a execução e avaliação.

    as validações ficam por conta do validation.js, onde criei 3 funcoes para validacoes de dados da requisição.

# package.json

No packge.json, temos algumas libs que costumo usar bastante nas minhas criações de APIs, 
    inicie o projeto com um "npm i"
        Nao se preocupe em executar os migrations, deixei tudo pronto para apenas fazer a conexao com o banco e quando der o start na api, as migrations sao executadas automaticamente.
            Deixei um env_file, que seria o arquivo de segurança, porem como este é um ambiente controlado, optei por deixar o campo de config do knex aberto para alteração, assim torna mais simples a analise e execução.