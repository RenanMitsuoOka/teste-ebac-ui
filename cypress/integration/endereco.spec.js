/// <reference types="Cypress" />

describe('Funcionalidade Endereços = Faturamento de entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(Dados =>{
            cy.login(Dados.Usuario, Dados.Senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

    });
});