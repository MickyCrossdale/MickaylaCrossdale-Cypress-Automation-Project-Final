class wishList{


    get productImageBtn() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')}
    get addfavoriteBtn() { return ('#add-to-favorite')}
    get addedProduct() { return ('[class="chakra-alert__title css-tidvy5"]')}
    get favoriteBtn() { return ('#top-favorite')}
    get removedBtn() { return ('#remove-favorite-btn')}
    get closeAddBtn() { return('button[aria-label="Close"]')}
    get removeProductMessage() { return ('[class="chakra-alert__title css-tidvy5"]')}
    get addToCartBtn() { return ('[data-item-id="quality-hat-model"]')}
    get cartSummary() { return ('.snipcart-item-line__container')}
    get truckerHatImageBtn() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat.jpg"]')}
    get homeBtn() { return ('#top-home')}
    get multipleFavorite() { return('button[id="top-favorite"] p[class="chakra-text css-0"]')}
    get favoriteItems() {return ('[class="chakra-heading css-11cq7yk"]')}
    get cartBtn() { return ('#top-cart')}
    get increaseQuantity() { return ('[title="Increment quantity"]')}

    
    addTowishList(){
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
    }   

    removeFromwishList(){
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
        cy.get(this.favoriteBtn).click()
        cy.get(this.closeAddBtn).click()
        cy.get(this.removedBtn).click({force: true})

    } 

    addToCart(){
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()

    }

    multipleItems() {
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
        cy.get(this.homeBtn).click()
        cy.get(this.closeAddBtn).click()
        cy.get(this.truckerHatImageBtn).click({force: true})
        cy.get(this.addfavoriteBtn).click({force: true})
        cy.get(this.favoriteBtn).click()
    }

    emptyFavorite() {
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
        cy.get(this.favoriteBtn).click()
        cy.get(this.closeAddBtn).click()
        cy.get(this.removedBtn).click({force: true})
        cy.get(this.cartBtn).click({force: true})

    }

    increasefavorite() { 
        cy.get(this.productImageBtn).click()
        cy.get(this.addfavoriteBtn).click()
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.increaseQuantity).click()


    }



    

    }
    export default new wishList()