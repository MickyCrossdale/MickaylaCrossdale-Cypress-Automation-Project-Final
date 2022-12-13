class cart{


    get productImageBtn() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')}
    get addToCartBtn() { return ('[data-item-id="quality-hat-model"]')}
    get detailedCartBtn() { return ('.snipcart-button-link')}
    get summarySuccessMessage() { return ('.snipcart-cart-header__title.snipcart__font--black.snipcart__font--secondary')}
    get increaseQuantity() { return ('[title="Increment quantity"]')}
    get productSeccessMessage() { return ('[class="chakra-heading css-1jhlc8u"]')}
    get cartPrice() { return ('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary')}
    get backToStoreBtn() { return ('.snipcart-base-button__wrapper')}
    get shoppingBtn() { return ('.snipcart-modal__close-title.snipcart__font--std')}

     detailedCart(){

        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.detailedCartBtn).click()
        
     }  

     increaseCartQuantity(){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.detailedCartBtn).click()
        cy.get(this.increaseQuantity).click()     

     }


     cartCancel(){
      cy.get(this.addToCartBtn).scrollIntoView()
      cy.wait(1500)
      cy.get(this.addToCartBtn).should('be.visible').click()
      cy.get(this.detailedCartBtn).click()
      cy.get(this.shoppingBtn).click()

     }

    

    }
    export default new cart()