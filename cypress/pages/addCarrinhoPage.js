class CarrinhoPage {
  selectorList() {
      const selectors = {
          addCarrinho: "[data-testid='box-product-box-buttons']",
          voltageSelect: '[data-cy="modal-voltage-button-success"]',
          selectAdress: '[data-testid="address-box-action"]',
          selectPrazoEntrega:"[data-testid='shipping-options-box-radio-button-input']",
          selectFormaPagamento:'[data-cy="Pix-options-payment-title"]',
          finalButtonOne:'[data-cy="confirm-payment-button"]',
          finalButtonTwo:'[data-cy="button-submit-text"]'
      }
      
      return selectors
  }

  addCarrinho() {
      cy.get(this.selectorList().addCarrinho).click()
      cy.get(this.selectorList().voltageSelect).click()
  }
  
  finalizaPedido() {
      cy.get(this.selectorList().selectAdress).click()
      cy.get(this.selectorList().selectPrazoEntrega).click()
      cy.get(this.selectorList().selectFormaPagamento).click()
      cy.get(this.selectorList().finalButtonOne).click()
      cy.get(this.selectorList().finalButtonTwo).click()
  }
}

export default CarrinhoPage