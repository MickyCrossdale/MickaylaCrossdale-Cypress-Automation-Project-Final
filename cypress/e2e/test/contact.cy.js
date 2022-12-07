/// <reference types="cypress" />
import contactPage from '../page/contact.page'

describe.only('Conact', () => {
    beforeEach(() => {
        cy.visit('/contact')
    })

    it('Should be taken to the contact page',() =>{
        contactPage.contact()
        cy.get('.chakra-heading.css-z59od').should('be.visible')

    })

    it('Should be able to successfully send a message',() =>{
        contactPage.contactMessage('Sam','Dawson','Sam@gmail.com','Quality Camp','Quality Camp 2022')
        cy.get('[class="css-njbp03"]').should('be.visible')

    })

    it('Should not be able to send a message without Mandatory field inserted',() =>{
        contactPage.mandatoryFristName('Dawson','Sam@gmail.com','Quality Camp','Quality Camp 2022')
        cy.get('[class="chakra-form__error-message css-170ki1a"]').should('be.visible')

    })


        
})  