class EnderecoPage{

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco,numero,estado, cep, telefone, email){
        //Elementros mais ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        //combobox abaixo isando inspeção de codigo do crhome
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(estado)
        //combobox abaixo usando enter
        cy.get('#select2-billing_state-container').click().type(estado, + '{enter}').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()
    }
    EditarEnderecoEntrega(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep){
        //Elementros mais ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').click().clear().type(cidade)
        cy.get('#select2-shipping_state-container').click().type(estado, + '{enter}').click()
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get(':nth-child(2) > .button').click()
    }
}

export default new EnderecoPage()