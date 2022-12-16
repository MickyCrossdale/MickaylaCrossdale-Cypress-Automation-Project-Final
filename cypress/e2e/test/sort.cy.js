/// <reference types="cypress" />
import Auth from '../page/login.page'

describe('Sort', () => {
    beforeEach(() => {
        cy.visit('/products')
    })

    it.only('should sort product list from A-Z', () => {
        //Auth.login('Sam@gmail.com', 'Password@1')
        cy.get(Sort.sortOptions).scrollIntoView()
        cy.wait(3000)
        cy.get(Sort.sortOptions).select('aToZ')
        cy.wait(1000)

        var productList = ['Dell Laptop', 'Gray Couch', 'HP Laptop', 'Mackbook Pro','Quality Blue Shoes', 'Quality Cargo Pants','Quality Fitted Hat','Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug','Quality Pillow','Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt','Quality Vneck','Red Couch','White Couch']
        productList.sort()
       

        cy.get(Sort.sortOptions).each(($elem, index, $list) => {
            expect($elem.text()).equal(productList[index])
        })

    })
    it('should sort product list from Z-A', () => {
        //Auth.login('Sam@gmail.com', 'Password@1')
        cy.get('#sort').select('zToA')

        var productList =  ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug', 'Quality Pillow', 'Quality Hooded Sweatshirt','Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants','Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
        productList.sort().reverse()
        

        cy.get('.css-1n64n71').each(($elem, index, $list) => {
            expect($elem.text()).equal(productList[index])
        })
    })

    it('should sort product list from low-high', () => {
        //Auth.login('standard_user','secret_sauce')
        cy.get('#sort').select('lowToHigh')

        var productPrice =  [29.99, 9.99, 15.99,49.99,7.99,15.99]
        productPrice.sort()

        cy.get('.css-1n64n71').each(($elem, index) => {
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