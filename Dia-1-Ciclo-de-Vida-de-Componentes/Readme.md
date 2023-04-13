Ciclo do React é dividido em 3 etapas:
Montagem: quando o componente é inicializado e inserido no DOM;
Atualização: quando as props ou estados do componente são alterados;
Desmontagem: quando o componente morre, sumindo do DOM
Montagem:
`constructor` recebe as props e define o estado
`render` renderiza o componente, inserindo-o no DOM;
`componentDidMount` Renderiza assim que a página carrega. Dispara uma ou mais ações após o componente ser inserido no DOM(ideal para requisições);

Atualização:
`shouldComponentUpdate` possibilita autorizar ou não o componente a atualizar/Renderizar
- Trás os novos valores atualizados (estado)
`componentDidUpdate` dispara uma ou mais ações após o componente ser atualizado
- Trás os valores antigos(estado) antes da atualização
Desmontagem:
`componentWillUnmount` dispara uma ou mais ações antes de o componente ser desmontado

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/