class login{

    get signInorRegisterBtn() { return ('#signInOrRegister')}
    get inPutEmail() { return ('[id="1-email"]')}
    get inputPassword() { return ('[id="1-password"]')}
    get loginBtn() { return ('[id="1-submit"]')}
    get sucessMessage() { return ('.chakra-heading.css-kmq9po')}
    
    login(email, password){
        cy.get(this.signInorRegisterBtn).click()
        cy.get(this.inPutEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.loginBtn).click()
    }   

    loginIncorrectPassword(email, password){
        cy.get(this.signInorRegisterBtn).click()
        cy.get(this.inPutEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.loginBtn).click()
    }   

    loginIncorrectEmail(email, password){
        cy.get(this.signInorRegisterBtn).click()
        cy.get(this.inPutEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.loginBtn).click()
    }   

    loginIncorrectEmailPassword(email, password){
        cy.get(this.signInorRegisterBtn).click()
        cy.get(this.inPutEmail).type(email)
        cy.get(this.inputPassword).type(password)
        cy.get(this.loginBtn).click()
    }   

    }
    export default new login()