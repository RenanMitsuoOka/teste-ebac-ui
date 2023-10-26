/// <reference types="Cypress" />

context('Funcionalidade Login',() => {
    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    ///tira print das evidencias
    ///afterEach(() =>{
    ///    cy.screenshot()
    ///})

it('Deve fazer login com sucesso',() =>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('contain', 'Sair')    
})
it('Deve exibir uma mensagem de erro ao invesir usuario invalidos',() =>{
    cy.get('#username').type('loginerrado@teste.com')
    cy.get('#password').type('teste@test')
    cy.get('.woocommerce-form > .button').click()
})
it('Deve exibir uma mensagem de erro ao invesir senha invalidos',() =>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@test')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro')
})});