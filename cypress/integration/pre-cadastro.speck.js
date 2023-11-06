///<reference types = "cypress" />
var faker = require('faker');

describe('Funcionalidade pré cadastro', () =>{
    beforeEach(() =>{
        cy.visit('minha-conta')
    })
    it('Deve completar o pre cadastro com sucesso',() =>{
        let emailfaket = faker.internet.email()
        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        cy.get('#reg_email').type(emailfaket)
        cy.get('#reg_password').type('Rnaoka1@gmail.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'modificados')
    });
it.only('Deve completar o pré-cadastro usando os comandos customizados',() =>{
    let emailfaket2 = faker.internet.email()
    cy.precadastro(emailfaket2, 'senha@A123', 'Teste', 'Teste automatico')
});

});