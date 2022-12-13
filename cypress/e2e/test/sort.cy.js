/// <reference types="cypress" />
import Auth from '../page/login.page'

describe('Filter', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort product list from A-Z', () => {
        //Auth.login('Sam@gmail.com', 'Password@1')
        cy.get('[class="chakra-text css-1n64n71"]').select('az')

        var productList = ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug', 'Quality Pillow', 'Quality Hooded Sweatshirt','Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants','Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
        productList.sort()

        cy.get('[class="chakra-text css-1n64n71"]').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })

    })
    it('should sort product list from Z-A', () => {
        //Auth.login('Sam@gmail.com', 'Password@1')
        cy.get('[class="chakra-text css-1n64n71"]').select('za')

        var productList =  ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug', 'Quality Pillow', 'Quality Hooded Sweatshirt','Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants','Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
        productList.sort().reverse()
       

        cy.get('[class="chakra-text css-1n64n71"]').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })
    })

    it('should sort product list from low-high', () => {
        //Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('lohi')

        var productPrice =  [29.99, 9.99, 15.99,49.99,7.99,15.99]
        productPrice.sort()

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text().replace('$','')).equal(productPrice[index])
        })
    })


    it('should sort product list from high-low', () => {
        //Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('hilo')

        var productPrice =  [29.99, 9.99,15.99,49.99,7.99,15.99]
        productPrice.sort().reverse()

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text()).equal(productPrice[index])
        })
    })
})  