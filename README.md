
# Bem vindo a shield!

Irei fazer uma explicação rapida do projeto ^^ 


## Arquitetura de Pastas 

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

## Arquitetura de arquivos
- [components](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/components "components")
	- Divididos em App e Ui
		- App -- quando um componente da interface precisa de um "container" contendo regras de negocio (sidebar de edição de produtos, sidebar é um componente Ui enquanto a edição de produto é sua regra de negocio ou App);
		- Ui -- Um componente puro e de responsabilidade unica (Princípio da **Responsabilidade Única**), onde ele realiza uma ação e e emite seus eventos que podem ser ouvidos por componentes superiores;
	- Componente -- Formado por dois ou mais arquivos, sendo o principal o **index.js** onde se chama todas as dependencias, estilização e qualquer outra coisa referente as responsabilidades desse componente;
- [containers](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/containers "containers")   
	- Onde se localiza todas as configurações dos plugins usados, onde permanecem intocados e prontos para serem criadas novas instancias a partir da original do container.
- [routes](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/routes "routes") 
	- Divididos em dois arquivos principais 
		- [index.js](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/blob/GH-PG/src/routes/index.js "index.js") é responsavel por fazer o loop das rotas e sub-rotas e chamar dependencias do roouter.
		- [routes.js](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/blob/GH-PG/src/routes/routes.js "routes.js") e seus filhos ( pages.js, user.js e etc ), é responsavel por registrar em um objeto todas as rotas existentes na aplicação, registrar permissões, nomes unicos e propriedades unicas como variaveis de contexto.
- [services](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/services "services")
	- Consta pastas de modulos de acesso de informação persistente, ajax, local-storage ou mesmo o local-db
		- [Axios](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/services/axios "axios") --  As rotas e abstraçoes usando ajax/Axios.
			- [rest.js](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/blob/GH-PG/src/services/axios/rest.js "rest.js") gera tipos de requisição padrão ( get, get${id}, post e etc).
		- [Storage](https://github.com/fullstack-overkill/Consulta-de-quadrinhos/tree/GH-PG/src/services/storage "storage") -- Abstração do local storage do navegador.

## Componentes

Divididos em dois arquivos:
-  index.js
- style.scss

Se utiliza o index como ponto de partida do componente para que ele possa crescer horizontalmente caso necessario.
