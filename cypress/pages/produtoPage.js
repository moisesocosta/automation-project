class ProductPage {
  selectorList() {
      const selectors = {
          searchButton: '[data-cy="button-close-modal-cookie"]',
          produtoField: '[data-cy="input-search-product"]',
          confirmeSearchButton: '[data-cy="search-product-hyperlink"]',
          productSelect: '[data-cy="card-container-0"] > [data-cy="product-card-container-as-component-link"]',
      }
      
      return selectors
  }

  selectProduct() {
      cy.get(this.selectorList().searchButton).click()
      cy.get(this.selectorList().produtoField).type('Smart Tv 32')
      cy.get(this.selectorList().confirmeSearchButton).click()
      cy.url().should('include', '/pesquisa')
      cy.get(this.selectorList().productSelect).click()
      cy.url().should('include', '/produto')
  }
}

export default ProductPage