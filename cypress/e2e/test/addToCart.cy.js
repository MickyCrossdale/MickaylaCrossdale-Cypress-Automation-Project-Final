/// <reference types="cypress" />
import Auth from '../page/login.page'
import addToCartPage from '../page/addToCart.page'


describe('Add To Cart', () => {
    beforeEach(() => {
        //cy.viewport(1536, 960)
        cy.visit('/products')
    })

    it('Should add an Item to cart', () => {
       // Auth.login('Sam@gmail.com', 'Password@1')
        addToCartPage.addToCart()
        cy.get('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black').should('be.visible')

    }) 

    it('Should delete an Item to cart', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         addToCartPage.deleteFromCart()
         cy.get('.chakra-heading.css-1jhlc8u').should('be.visible')
 
     }) 

     it('Should be able to increase cart quantity', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
        addToCartPage.cartIncrease()
         cy.get('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary').should('contain','$60')
 
     }) 



 


})
