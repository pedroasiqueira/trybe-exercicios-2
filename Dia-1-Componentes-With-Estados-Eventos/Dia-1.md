# Componentes com Estado e Eventos

## Componentes e Estados

<details>
  <summary><strong>Onde guardar uma informação que queremos preservar dentro do contexto do React?</strong></summary><br />
  
  * No estado do componente!!
</details>

<details>
  <summary><strong>Estado de um componente</strong></summary><br />

  * Uma aplicação vai ter vários componentes, e cada um desses componentes vai ter o seu estado.

  * O Estado de um componente é um lugar especial que todo componente tem para armazenar **informações que devem persistir enquanto a tela não for fechada ou atualizada**. É o filtro selecionado, o item da lista destacado, o carrinho de compras, tudo isso e mais!

  * No _React_, cada componente cuida das suas informações, e o React garante que todas estejam atualizadas de maneira otimizada.

  


Local especial onde armazena as informações que vão ficar persistentes independende do que aconteça com os componentes

Se o componente estiver na tela, ele vai ter essa informação guardada lá.

Cada componente vai ter esse _local_ para guardar informação que é o **estado**

Se houverem 4 componentes, vão ter 4 estados diferentes
Cada componente vai ter seu estado
Um não enxerga o estado do outro
E se tiver um componente pai, ele vai ter o estado dele e só. Um componente **NUNCA** enxerga o componente de outro componente
Cada componente guarda o seu conjunto de informações

O conceito é: **state, ou estado do componente**, deve servir para ***guardar valores do Componente que mudam com o uso dele***.
As **props** são ***valores fixos*** que um componente ***recebe e não altera.***

</details>

---

## Eventos no React
<details>
  <summary><strong>THIS</strong></summary><br />

  * É um objeto que o JS cria e entrega para nós.
Representa aquela class/componente com tudo que eles tem.
Dentro do THIS tem a props
Assunto anterior acessavamos somente o this.props
  
</details>

<details>
  <summary><strong>Constructor</strong></summary><br />

  * 
  
</details>