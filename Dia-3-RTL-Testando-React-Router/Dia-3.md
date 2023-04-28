 A biblioteca history nos permite acessar a sessão de histórico do navegador e também a localização atual (URL). Documentação: https://v5.reactrouter.com/web/api/history

  Para os nossos testes, os métodos mais utilizados serão o `push`, que permite mudar de rota dentro do ambiente de testes, e o `location.pathname`, que retorna a URL exata em que você está.

  Dentro da biblioteca, você também importará a `createMemoryHistory`, que é feita para ser utilizada em ambientes que não possuem DOM, como em testes automatizados. O intuito dessa função é criar um novo histórico de navegação para ser utilizado durante o teste.

  A função `renderWithRouter` é uma função customizada para fazer testes com rotas, uma vez que a função render normal da RTL não dá suporte ao router. Ela usa o `createMemoryHistory` para embutir a lógica de histórico de navegação no seu componente renderizado, para uso nos testes. Veja um código de exemplo: https://testing-library.com/docs/example-react-router/#reducing-boilerplate


Onde que está o state para eu precisar usar o act no teste do app.test.js?