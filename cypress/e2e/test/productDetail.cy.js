/// <reference types="cypress" />
import productDetailPage from '../page/productDetail.page'

describe.only('productDetail', () => {
    beforeEach(() => {
        cy.visit('/products')
    })

    it('Should be taken to view a products description',() =>{
        productDetailPage.productDetail()
        cy.get('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]').should('be.visible')

    })

    it('Should be taken to select related product(s)',() =>{
        productDetailPage.relatedProduct()
        cy.get('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]').should('be.visible')

    })

    it('Should be taken back to the product gallery page',() =>{
        productDetailPage.productPage()
        cy.get('[class="chakra-heading css-1jhlc8u"]').should('be.visible')

    })
   

        
})  