/// <reference types="Cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços = Faturamento de entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil.json').then(Dados =>{
            cy.login(Dados.Usuario, Dados.Senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Renan', 'oka', 'OEM', 'Brasil', 'Carrao', '98', 'São Paulo', '03456-030', '27217815', 'Renan@softeasy.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
/// Pega o arquivo da fixture endereco.json
    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo', () => {
        enderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});