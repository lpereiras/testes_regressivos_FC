describe('Login Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.reload()
    cy.wait(5000)
    cy.visit('')
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

  })

  it('Deve realizar login com sucesso', () => {

    cy.url()
      .should('include', '/login')

      cy.get('div input[aria-label=E-mail]')
        .should('be.visible')
        .type(Cypress.env('email'))

      cy.get('div input[aria-label=Password]')
        .should('be.visible')
        .type(Cypress.env('password'), { log : false })

      cy.get('.submit-btn > .q-btn__wrapper > .q-btn__content')
        .should('be.visible')
        .click()

        cy.wait('@SignIn')
        cy.request('@SignIn')
            .then((response) => {
            expect(response.status).to.eq(200); 
    });
  })

  it('Deve invalidar o login por senha errada', () => {
    cy.url()
    .should('include', '/login')

    cy.get('div input[aria-label=E-mail]')
      .should('be.visible')
      .type(Cypress.env('email'))

    cy.get('div input[aria-label=Password]')
     .should('be.visible')
     .type(Cypress.env('wrong_password'))

    cy.get('.submit-btn > .q-btn__wrapper > .q-btn__content')
      .should('be.visible')
      .click()    

      cy.wait('@SignIn').then((interception) => {
        expect(interception.response.statusCode).to.eq(400); 
      })
  })
})