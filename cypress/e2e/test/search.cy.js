/// <reference types="cypress" />
import searchPage from '../page/search.page'

describe.only('Search', () => {
    beforeEach(() => {
        cy.visit('/products')
    })

    it('Should be able to search for an item',() =>{
        searchPage.search('Quality Mug')
        cy.get('[class="chakra-text css-1n64n71"]').should('be.visible')

    })

    it('Should be able to search for items by category',() =>{
        searchPage.search('Shirt')
        cy.get('.chakra-heading.css-1jhlc8u').should('be.visible')

    })
    
    it('Should be able to reset items searched',() =>{
        searchPage.reset('Shirt')
        cy.get('.chakra-heading.css-1jhlc8u').should('be.visible')

    })

    //NEGATIVE TEST

    it.only('Should not be able to search by incorrect spelling',() =>{
        searchPage.incorrectSpell('Ham')
        cy.get('.chakra-heading.css-1jhlc8u').should('be.visible')

    })


   
        
})  