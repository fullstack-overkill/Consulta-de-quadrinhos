# Bem vindo a shield!

Irei fazer uma explicação rapida do projeto ^^ 


# Files

- src
  - _test_: Arquivos de testes do nightwatch;
  - assets: Arquivos relacionado a recursos do projeto;
    -   fonts: arquivos de fontes do projeto;
    -  imgs: jpg, svg e etc usados no projeto;
    -  scss: Arquivos scss responsáveis por normalizar os elementos e configurar as fontes do projeto;
   -  components: Componentes reutilizáveis do projeto;
      -  app: Componentes com algum tipo de regra de negocio ou específicos do projeto;
      - ui: Componentes genéricos
     - containers: Isolamento dos plugins utilizados;
     - mixins: funções e classes genericas;
     - routes: rotas do sistema;
       - index.js: loop das rotas usando o react router;
       - routes.js: Objeto contendo todas as rotas do sistema;
     - services: Abstração da API;
       -   axios: Abrstração do Axios;
           -  modules: acessos externos usando Axios;
           -  index,js: ponto de acesso dos modules;
           -  rest.js: Abstração de funçoes rest;
       -   storage: Abstração do localStorage;
     -  templates: Componentes genéricos de pagina;
     -  Views: lista de views do projeto;
	     - private: views que necessitão autenticação;
	     - public: views livres para acesso;

## Componentes

Divididos em dois arquivos:
-  index.js
- style.scss

Se utiliza o index como ponto de partida do componente para que ele possa crescer horizontalmente caso necessario.
