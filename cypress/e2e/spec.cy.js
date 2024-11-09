import ProductPage from '../pages/produtoPage.js'
import CarrinhoPage from '../pages/addCarrinhoPage.js';
import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/users/userData.json'

const producPage = new ProductPage()
const carrinhoPage = new CarrinhoPage()
const loginPage = new LoginPage()

describe('Teste de fluxo de compra', () => {
   it.only('Busca e inserção no carrinho', () => {
      cy.visit('#')
      producPage.selectProduct()
      carrinhoPage.addCarrinho()
      loginPage.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
      carrinhoPage.finalizaPedido()
   })
})