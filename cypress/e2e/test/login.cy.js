/// <reference types="cypress" />
import Auth from '../page/login.page'

describe.only('login', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
    })


    it('Should login with valid credentials',() =>{
        Auth.login('Sam@gmail.com', 'Password@1')
        cy.get('.chakra-heading.css-kmq9po').should('be.visible')

    })

    it('Should not login with invalid password',() =>{
        Auth.loginIncorrectPassword('Sam@gmail.com', 'Password')
        cy.get('[class="auth0-global-message auth0-global-message-error"]').should('be.visible')

    })

    it('Should not login with invalid email',() =>{
        Auth.loginIncorrectEmail('Sa@gmail.com', 'Password@1')
        cy.get('[class="auth0-global-message auth0-global-message-error"]').should('be.visible')

    })

    it('Should not login with invalid email and password',() =>{
        Auth.loginIncorrectEmailPassword('Sa@gmail.com', 'Password')
        cy.get('[class="auth0-global-message auth0-global-message-error"]').should('be.visible')

    })

    it.only("Login to platform", () => {
        
        cy.get('#signInOrRegister').should('be.visible')  
        cy.get('#signInOrRegister').click() 
        cy.get('[name=email]').type("Sam@gmail.com");
        cy.get('[type="password"]').type("Password@1", { log: false });
        cy.get(Auth.loginBtn).should('be.visible');
        cy.get(Auth.loginBtn).click();
        cy.get(Auth.sucessMessage).should('be.visible')
        cy.get(Auth.sucessMessage).should('have.text',"Products")
          }
        );
      });
   
        
