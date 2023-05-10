intalando redux no React
```javascript
npm install redux react-redux
```
Depois que fizer a `action`, ir mexer no `reducer`
O RESPONSÁVEL por alterar/Criar o Estado Global no Redux é o `Reducer`.

`connect()()`eu coloco no componente onde preciso acessar o estado global
- executa o primeiro `()` para depois mandar o ESTADO GLOBAL para o "componente" que tá no segundo `()` injetando dentro desse componente props que foram criadas no primeiro `()`
- o primeiro parenteses recebe o ESTADO GLOBAL(geralmente será colocado o `mapStateToProps()`) e o segundo parenteses é o local onde quero "mostrar" o ESTADO GLOBAL

```javascript
mapStateToProps = (globalState) => ({
  'O que tem aqui dentro vira props para eu poder acessar no meu componente'
  'A chave "exemplo:" vou acessar como props no meu componente'
  'Quando tá usando o rootReducer:'
  exemplo: globalState.NomeDoReducer.ChaveDoEstadoQueQueroAcessar
  'Quando não estou usando o rootReducer:'
  exemplo: globalState.ChaveDoEstadoQueQueroAcessar
})
```
 é necessário para componentes que LEEM o estado global. Se não precisar ler, só escrever, não precisa usar.
- Objetivo dessa função é criar propriedades que irão receber os valores que estão no ESTADO GLOBAL no momento
- acessa e trás o ESTADO GLOBAL, mas TEM QUE TER o `connect(mapStateToProps)()`  - "minha definição"
- `mapStateToProps(globalState)` esse parametro `globalState` só recebe o ESTADO GLOBAL porque porque o `mapStateToProps` está dentro do `connect(mapStateToProps)()`
- "Mapeando Estado para Props"