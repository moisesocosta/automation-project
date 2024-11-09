# Este projeto foi escrito em JavaScript com Cypress

Este projeto se utiliza do JavaScript com o Cypress, para automatizar um fluxo de compra no e-commerce da [Ferreiracosta](https://www.ferreiracosta.com/)
Utilizando de uma estrutuda de PageObjects para organizar as sequencias de execução do algoritmo.

## Instalações necessárias
```bash
npm install
```
>NOTA:
>>
> É necessário ter o **node** instalado

## Para **Rodar**
```bash
#Para abrir com a UI do Cypress
npx cypress open
```

## Explicando a estrutuda de organização

Na pasta e2e está a main do projeto, onde é executado de fato os teste, nela eu fiz o import das páginas e dos dados. 
Na pasta fixture\users está o json dos dados de usuários
Na pasta pages, consta as páginas de script, separadas por campo:

**addCarrinhoPage.js** com os comandos de adicionar o produto selecionado ao carrinho pela função addCarrinho() e comando para finalizar o pedido pela função finalizaPedido()
nela estão os seletores dos botões para adicionar ao carrinho, selecionar: voltagem, endereço, prazo de entrega, forma de pagamento e os botões de confirmação de finalização de pedido.

**loginPage.js** com os comando para que seja feito o login com minha conta de usuário através da função loginWithUser() que espera os dados de email e senha
nela estão os seletores para clicar no botão de login, inserir os dados de email e senha e clicar no botão de entrar. 

**produtoPage.js** com os comando para pesquisar e selecionar o produto através da função selectProduct()
nela estão os seletores para clicar no campo de pesquisa, inserir a descrição do produto, o botão para confirmar a pesquisa, adicionei um comando para validar se a pesquisa foi feita e aguardar,
o botão de selecionar o produto, e mais um comando para validar se entrou na aba do produto em questão.