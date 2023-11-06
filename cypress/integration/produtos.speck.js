///<reference types = "cypress" />

describe('Funcionalidade pagina de Produto', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve Selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //Pega 4 item da lista
            //.eq(3)
            .contains('Bruno Compete Hoodie')
            .click()
    });
    it('Deve adicionar um produto ao carrinho',() =>{
        var quantidade = 7
        cy.get('[class="product-block grid"]')
        .contains('Bruno Compete Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text')
        .clear()
        .type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });    
    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado',() =>{
        cy.addProdutos('Bruno Compete Hoodie', 'M', 'Black', 3)
    });
    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado',() =>{
        cy.addProdutos('Abominable Hoodie', 'S', 'Blue', 2)
    });
});