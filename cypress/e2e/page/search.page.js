class search{

    get searchBtn() { return ('#search')}
    get successMessage() { return ('[class="chakra-text css-1n64n71"]')}
    get itemNames() { return ('.chakra-heading.css-1jhlc8u')}
    get resetBtn() { return ('[class="chakra-button css-i857na"]')}
    
    
    search(search){
        cy.get(this.searchBtn).scrollIntoView()
        cy.get(this.searchBtn).click()
        cy.get(this.searchBtn).type(search)
    }  
    
    category(search){
        cy.get(this.searchBtn).scrollIntoView()
        cy.get(this.searchBtn).click()
        cy.get(this.searchBtn).type(search)
    }  
    
    reset(search){
        cy.get(this.searchBtn).scrollIntoView()
        cy.get(this.searchBtn).click()
        cy.get(this.searchBtn).type(search)
        cy.get(this.resetBtn).click()

    }

    incorrectSpell(search){
        cy.get(this.searchBtn).scrollIntoView()
        cy.get(this.searchBtn).click()
        cy.get(this.searchBtn).type(search)


    }
        
       

    }
    export default new search()