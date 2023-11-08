class EnderecoPage{

    editarEnderecoFaturamento(){
        //Elementros mais ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type('Renan')
        cy.get('#billing_last_name').clear().type('Mitsuo')
        cy.get('#billing_company').clear().type('Softeasy')
        //combobox abaixo isando inspeção de codigo do crhome
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Henrique Carnicelli')
        cy.get('#billing_address_2').clear().type('93')
        cy.get('#billing_city').clear().type('São Paulo')
        //combobox abaixo usando enter
        cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').clear().type('03456-040')
        cy.get('#billing_phone').clear().type('11952191115')
        cy.get('#billing_email').clear().type('rnaoka@gmail.com')
        cy.get(':nth-child(2) > .button').click()
    }
    EditarEnderecoEntrega(){
        //Elementros mais ações
    }
}

export default new EnderecoPage()