describe('Login no sauce demo', () => {
    beforeEach(() => {
        cy.session("sessao", () => {
            visit();
        })
    })

    function visit() {
        cy.visit('/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    }

    it('realizar login', () => {
    })

    it('verificar lista de produtos', () => {
        cy.get('.title').should('have.text', 'Products');
    })

    it('adicionar produtos ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('.shopping_cart_link');
    })

    it('realizar checkout', () => {
    })

    it('informar dados do cliente', () => {
    })

    it('verificar lista de produtos', () => {
    })
})