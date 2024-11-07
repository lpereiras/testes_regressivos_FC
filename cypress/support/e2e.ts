import './commands'

beforeEach ( () => {
  cy.intercept('POST', '**/v1/heimdall/account/signin**').as('SignIn');
})