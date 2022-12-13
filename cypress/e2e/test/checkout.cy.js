/// <reference types="cypress" />
import Auth from '../page/login.page'
import checkoutPage from '../page/checkout.page'


describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('/products')
    })



    it.only('Should be able to complete checkout', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         checkoutPage.checkout('Sam','Sam@gmail.com','Salt Lake','Spain','Jamaica','St.Catherine','JMACE25')
         cy.get('div[class="snipcart__box--title"] div h1[class="snipcart__font--subtitle"]').should('contain','Thank you for your order')
 
     }) 

    //NEGATIVE TEST

    it('Should not be able to complete checkout without inserting a country', () => {
        // Auth.login('Sam@gmail.com', 'Password@1')
         checkoutPage.checkoutError('Sam','Sam@gmail.com','Salt Lake','Spain','St.Catherine','JMACE25')
         cy.get('.snipcart-field-error').scrollIntoView().should('contain','This field is required')
 
     }) 

   


})
