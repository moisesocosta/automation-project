class LoginPage {
  selectorList() {
      const selectors = {
          clickLoginButton: '[data-cy="box-details-info-box-buttons"] > [data-cy="box-details-info-button-success"]',
          email: '[data-cy="input-email-login"]',
          passwordField: '[data-cy="input-password-login"]',
          loginButton: '[data-cy="button-submit-login"]',
      }
      
      return selectors
  }

  loginWithUser(email, password) {
      cy.get(this.selectorList().clickLoginButton).click()
      cy.get(this.selectorList().email).type(email)
      cy.get(this.selectorList().passwordField).type(password)
      cy.get(this.selectorList().loginButton).click()
      cy.url().should('include','/checkout/pagamento')
  }
}

export default LoginPage