class contact{


    get addToCartBtn() { return ('[data-item-id="quality-hat-model"]')}
    get deleteBtn() { return ('button[title="Remove item"]')}
    get backToStoreBtn() { return ('.snipcart-base-button__wrapper')}
    get mainPage() { return ('.chakra-heading.css-1jhlc8u')}
    get productImageBtn() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')}
    get increaseQuantity() { return ('[title="Increment quantity"]')}
    get valueCartBtn() { return ('[class="chakra-numberinput__field css-a8qclj"]')}
    get sucessMessage() { return ('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black')}
    //get checkoutBtn() { return ('button[class="snipcart-button-primary snipcart-base-button is-icon-right"]')}

    addToCart(){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
        
    }

     deleteFromCart(){

         cy.get(this.addToCartBtn).scrollIntoView()
         cy.wait(1500)
         cy.get(this.addToCartBtn).should('be.visible').click()
         cy.get(this.deleteBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.deleteBtn).click({force: true})
        cy.get(this.backToStoreBtn).click()
        
        
     }  
     
     valueCart(value){
        cy.get(this.productImageBtn).click()
        cy.get(this.valueCartBtn).type(value,{force: true})
        cy.get(this.addToCartBtn).click()

     }

     cartIncrease(){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.increaseQuantity).click()



     }

    

    }
    export default new contact()