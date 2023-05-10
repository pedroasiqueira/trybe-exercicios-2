intalando redux no React
```javascript
npm install redux react-redux
```
Depois que fizer a `action`, ir mexer no `reducer`
O RESPONSÁVEL por alterar/Criar o Estado Global no Redux é o `Reducer`.

`connect()()`eu coloco no componente onde preciso acessar o estado global
- executa o `connect()` primeiro para depois criar o "componente" que tá no segundo `()` injetando dentro desse componente props que foram criadas no `connect()`

`mapStateToProps()` é necessário para componentes que LEEM o estado global. Se não precisar ler, só escrever, não precisa usar.
- Objetivo dessa função é criar propriedades que irão receber os valores que estão no ESTADO GLOBAL no momento
- acessa e trás o ESTADO GLOBAL - "minha definição"
- "Mapeando Estado para Props"