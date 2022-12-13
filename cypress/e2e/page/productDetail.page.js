class detail{

    get productImageBtn() { return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')}
    get successMessage() { return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]')}
    get relatedproductImage() { return('.chakra-image.css-138bbah')}
    get productSuccessMessage() { return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]')}
    get backButton() { return ('[class="chakra-heading css-18j379d"]')}
    get mainPage() { return ('[class="chakra-heading css-1jhlc8u"]')}
    
    
    productDetail(){
        cy.get(this.productImageBtn).scrollIntoView()
        cy.get(this.productImageBtn).click()
    }  

    relatedProduct(){
        cy.get(this.productImageBtn).scrollIntoView()
        cy.get(this.productImageBtn).click()
        cy.get(this.relatedproductImage).scrollIntoView()
        cy.get(this.relatedproductImage).click()

    }

    productPage(){
        cy.get(this.productImageBtn).scrollIntoView()
        cy.get(this.productImageBtn).click()
        cy.get(this.backButton).click()


    }


       

    }
    export default new detail()