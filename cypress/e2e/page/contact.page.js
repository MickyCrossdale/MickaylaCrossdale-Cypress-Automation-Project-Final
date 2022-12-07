class contact{


    get signInorRegisterBtn() { return ('#signInOrRegister')}
    get inPutEmail() { return ('[id="1-email"]')}
    get inputPassword() { return ('[id="1-password"]')}
    get loginBtn() { return ('[id="1-submit"]')}    
    get contactBtn() { return ('#top-contact')}
    get firstName() { return ('#firstName')}
    get lastName() { return ('#lastName')}
    get emailAddress() { return ('#email')}
    get subjectMessage() { return ('#subject')}
    get messageDetail() { return ('#message')}
    get sendMessageBtn() { return ('[class="chakra-button css-vs0e4t"]')}
    get sucessMessageMessage() { return('[class="css-njbp03"]')}
    get mandatoryFieldMessage() { return('[class="chakra-form__error-message css-170ki1a"]')}
    get sucessMessage() { return ('.chakra-heading.css-z59od')}
    
    contact(email, password){
        //cy.get(this.signInorRegisterBtn).click()
        //cy.get(this.inPutEmail).type(email)
        //cy.get(this.inputPassword).type(password)
        //cy.get(this.loginBtn).click()
        cy.get(this.contactBtn).click()
    }   

    contactMessage(firstname, lastname, email, subject, message){
        cy.get(this.contactBtn).click()
        cy.get(this.firstName).type(firstname)
        cy.get(this.lastName).type(lastname)
        cy.get(this.emailAddress).type(email)
        cy.get(this.subjectMessage).type(subject)
        cy.get(this.messageDetail).type(message)
        cy.get(this.sendMessageBtn).click()

    }

    mandatoryFristName(lastname, email, subject, message){
        cy.get(this.contactBtn).click()
        cy.get(this.lastName).type(lastname)
        cy.get(this.emailAddress).type(email)
        cy.get(this.subjectMessage).type(subject)
        cy.get(this.messageDetail).type(message)
        cy.get(this.sendMessageBtn).click()

    }

        

    

    }
    export default new contact()