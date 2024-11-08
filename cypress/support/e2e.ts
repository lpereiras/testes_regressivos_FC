import './commands'

beforeEach ( () => {
  //LOGIN
  cy.intercept('POST', '**/v1/heimdall/account/signin**').as('SignIn');
})