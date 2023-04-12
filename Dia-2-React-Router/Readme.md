`props.children` ferramenta para reutilização de componentes. Exemplo:
```javascript
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}
```
E dessa forma podemos acessar e exibir na tela o valor `SUPIMPA` no `ComponentePai`:
```javascript
const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
```
Caso o componente pai esteja com mais de um elemento dentro como no exemplo abaixo, `props.children` se torna um **array de objetos** com informações de cada filho
```javascript
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}
```
`BrowserRouter`é o componente que encapsula sua apliação, de forma a te possibilitar fazer uso de navegação
Você pode encapsular diretmaente no App.js:
```javascript
// ./src/App.js
import { BrowserRouter } from 'react-router-dom';
// ...
<BrowserRouter>
  <Home />
  <About />
</BrowserRouter>
// ...
```

`Route` Ex:
O caminho da URL atual do navegador começa com o caminho `/about`, declarado na prop `path` no componente `Route`. Dessa forma, se o caminho da URL for `/about`, o componente `About` será renderizado: 
```javascript
import { Route } from 'react-router-dom'
//...
<Route path="/about" component={ About } />
```
Entretanto, se a URL atual for `/about/me`, por exemplo, também existirá correspondência, e o componente `About` continuará sendo renderizado. Nesse caso, o parâmetro **exact** pode entrar em ação:
```javascript
<Route exact path="/about" component={ About } />
```

`Link`
```javascript
import { Link } from 'react-router-dom'
<Link to="/about" > About </Link>
```

`Componentes Route com props e parâmetros`
Exemplos pq não tem no course:
No `App.js`
```javascript
 <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage= "Good Morning"/>} />
```
E no Componente `Users`:
```javascript
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component { id }</p>
      </div>
    );
  }
};
```
`Switch`
```javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>
```
`Redirect`
Componente que permite **ativamente** levar quem usa a aplicação para diferentes locais dela.
Ex: a pessoa só pode acessar informações sensíveis (tipo conta bancária) se ela já estiver autenticada, caso contrário, ela é redirecionada para uma página de login
```javascript
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route exact path="/">
      {logado ? <Redirect to="/dashboard" /> : <Login />}
    </Route>
  </Switch>
```

`coringa *` usado para mostrar a msg 404
```javascript
<Route path='*' component={NotFound} />
```




```javascript

```