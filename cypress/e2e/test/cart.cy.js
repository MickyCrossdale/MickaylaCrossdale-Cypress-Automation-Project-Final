/// <reference types="cypress" />
import Auth from '../page/login.page'
import cartPage from '../page/cart.page'


describe('Cart', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit('/products')
    })

    it('Should be able to view cart details', () => {
       // Auth.login('Sam@gmail.com', 'Password@1')
        cartPage.detailedCart()
        cy.get('.snipcart-cart-header__title.snipcart__font--black.snipcart__font--secondary').should('be.visible')

    }) 

    it('Should be able to go to main page', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         cartPage.cartCancel()
         cy.get('[class="chakra-heading css-1jhlc8u"]').should('be.visible')
 
     }) 

     it('Should be able to increase cart quantity', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         cartPage.increaseCartQuantity()
         cy.get('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary').should('contain','$60')
 
     }) 



 


})
