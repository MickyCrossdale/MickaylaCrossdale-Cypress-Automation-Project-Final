/// <reference types="cypress" />
import productGalleryPage from '../page/productGallery.page'

describe.only('Conact', () => {
    beforeEach(() => {
        cy.visit('/contact')
    })

    it('Should be taken to the contact page',() =>{
        productGalleryPage.contact()
        cy.get('.chakra-heading.css-z59od').should('be.visible')

    })


    it('Should be taken to the home page',() =>{
        productGalleryPage.home()
        cy.get('[class="chakra-heading css-kmq9po"]').should('be.visible')

    })

    it('Should be able to sign out',() =>{
        productGalleryPage.signOut()
        cy.get('#login-text').should('be.visible')

    })


        
})  