class gallery{


     
    get contactBtn() { return ('#top-contact')}
    get homeBtn() { return ('#top-home')}
    get cartSuccessMessage() { return ('.snipcart__font--secondary.snipcart-cart__secondary-header-title.snipcart__font--bold.snipcart__font--xlarge')}
    get signOutBtn() { return ('#top-sign-out')}
    get welcomeMessage() { return ('#login-text')}
    get sucessMessage() { return ('.chakra-heading.css-z59od')}
    get campStoreMessage() { return ('[class="chakra-heading css-kmq9po"]')}
    
        contact(){
            cy.get(this.contactBtn).click()
    }         

        home(){
            cy.get(this.contactBtn).click()
            cy.get(this.homeBtn).click()

        }

        signOut(){
            cy.get(this.signOutBtn).click()
        }
            




     

    }
    export default new gallery()