class checkout{

    get addToCartBtn() { return ('[data-item-id="quality-hat-model"]')}
    get checkoutBtn() { return ('button[class="snipcart-button-primary snipcart-base-button is-icon-right"]')}
    get firstName() { return ('[name="name"]')}
    get emailAddress() { return ('[name="email"]')}
    get streetAddress() { return ('[name="address1"]')}
    get cityAddress() { return ('[name="city"]')}
    get countryInfo() { return ('div[class="snipcart-form__field"] div[class="snipcart-textbox snipcart__font--bold snipcart__font--secondary snipcart-form__select"]')}
    get provinceInfo() { return ('[name="province"]')}
    get postalInfo() { return ('[name="postalCode"]')}
    get continuePaymentBtn(){ return ('.snipcart-submit')}
    //get continuePaymentBtn() { return ('button[class="snipcart-button-primary snipcart-submit snipcart-base-button is-icon-right"]')}
    get errorMessage() {return ('[class="snipcart-field-error snipcart__font--tiny"]')}
    //get cardNumber() { return ('#card-number')}
    //get expiryDate() {return ('#expiry-date')}
    //get cvvNumber() { return ('#cvv')}
    //ger orderSuccessMessage() { return ('div[class="snipcart__box--title"] div h1[class="snipcart__font--subtitle"]'}
    get sucessMessage() { return ('[class="snipcart-payment__header snipcart__font--subtitle"]')}
    

    checkout(firstname, emailaddress, streetname, city, country, province, postal){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstname)
        cy.get(this.emailAddress).type(emailaddress)
        cy.get(this.streetAddress).type(streetname)
        cy.get(this.cityAddress).type(city)
        cy.get(this.countryInfo).select('country')
        cy.get(this.provinceInfo).type(province)
        cy.get(this.postalInfo).type(postal)
        cy.get(this.continuePaymentBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.continuePaymentBtn).should('be.visible').click()
        cy.get(this.continuePaymentBtn).click()

        
    }
    checkoutError(firstname, emailaddress, streetname, city, province, postal){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstname)
        cy.get(this.emailAddress).type(emailaddress)
        cy.get(this.streetAddress).scrollIntoView().type(streetname,{force: true})
        cy.get(this.cityAddress).type(city)
        cy.get(this.provinceInfo).type(province)
        cy.get(this.postalInfo).type(postal)
        cy.get(this.continuePaymentBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.continuePaymentBtn).click({force: true})
            
    }

    checkout(firstname, emailaddress, streetname, city,country, province, postal){
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.addToCartBtn).should('be.visible').click()
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstName).type(firstname)
        cy.get(this.emailAddress).type(emailaddress)
        cy.get(this.streetAddress).scrollIntoView().type(streetname,{force: true})
        cy.get(this.cityAddress).type(city)
        cy.get(this.countryInfo).select(country)
        cy.get(this.provinceInfo).type(province)
        cy.get(this.postalInfo).type(postal)
        cy.get(this.continuePaymentBtn).scrollIntoView()
        cy.wait(3000)
        cy.get(this.continuePaymentBtn).click({force: true})


    }



  

    }
    export default new checkout()