/// <reference types="cypress" />
import wishList from '../page/wishList.page'

describe.only('WishList', () => {
    beforeEach(() => {
        cy.visit('/products')
    })


    it('Should be able to be able to add a favorite item', () => {
        wishList.addTowishList()
        cy.get('[class="chakra-alert__title css-tidvy5"]').should('contain', 'Quality Fitted Hat added to favorites')

    })

    it('Should be able to be able to remove a favorite item from the favorite page', () => {
        wishList.removeFromwishList()
        cy.get('[class="chakra-alert__title css-tidvy5"]').should('contain','Quality Fitted Hat removed from favorites')

    })

    it('Should be able to be able to add a product to cart from favorite page', () => {
        wishList.addToCart()
        cy.get('.snipcart-item-line__container').should('be.visible')

    })

    it.only('Should be able to be able to increase the quantity of product added to cart from the favorite page', () => {
        wishList.increasefavorite()
        cy.get('[class="snipcart__font--secondary snipcart__font--regular"]').should('contain','2')

    })

    

    it('Should be able to be able to add multiple items to favorite', () => {
        wishList.multipleItems()
        cy.get('[class="chakra-heading css-11cq7yk"]').should('be.visible')

    })



    //NEGATIVE TEST

    it('Should not be able to checkout once an item is removed from favorite ', () => {
        wishList.emptyFavorite()
        cy.get('.snipcart-empty-cart').should('be.visible')

    })






})  