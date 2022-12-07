class addToCart{


    get addToCartBtn() { return ('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(3)')}
    get checkoutBtn() { return ('button[class="snipcart-button-primary snipcart-base-button is-icon-right"]')}
    get sucessMessage() { return ('.snipcart-cart-summary__title.snipcart__font--subtitle')}
    
    addToCart(){
        
        cy.get(this.addToCartBtn).click()
        cy.get(this.checkoutBtn).click()
    }   


    

    }
    export default new addToCart()