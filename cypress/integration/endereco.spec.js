/// <reference types="Cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade Endereços = Faturamento de entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(Dados =>{
            cy.login(Dados.Usuario, Dados.Senha)
        })
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento()
    });
});