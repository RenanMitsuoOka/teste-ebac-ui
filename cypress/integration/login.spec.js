/// <reference types="Cypress" />
const perfil = require('../fixtures/perfil.json')
///npx cypress open => abre o cypress
context('Funcionalidade Login',() => {
    beforeEach(() =>{
        cy.visit('minha-conta')
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
it('Deve fazer login com sucesso - Usando Arquivo de dados',()=>{
    cy.get('#username').type(perfil.Usuario)
    cy.get('#password').type(perfil.Senha)
    cy.get('.woocommerce-form > .button').click()
});

it.only('Deve fazer login com sucesso - Usando fixture',()=>{
    cy.fixture('perfil.json').then(dados => {
        cy.get('#username').type(dados.Usuario)
    cy.get('#password').type(dados.Senha,{log:false})
    cy.get('.woocommerce-form > .button').click()
    })
});

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