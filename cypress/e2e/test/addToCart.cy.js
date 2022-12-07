/// <reference types="cypress" />
import Auth from '../page/login.page'
import addToCartPage from '../page/addToCart.page'


describe('Add To Cart', () => {
    beforeEach(() => {
        cy.visit('/products')
    })

    it.only('Should add an Item to cart', () => {
       // Auth.login('Sam@gmail.com', 'Password@1')
        addToCartPage.addToCart()
        cy.get('.snipcart-cart-summary__title.snipcart__font--subtitle').should('be.visible')

    })

    it('Should view an item in the Summary Page', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         addToCart.cartItem()
         cy.get('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black').should('be.visible')
 
     })
 


})
