##Cypress Installation

Create Folder:
mkdir cypress-project

NPM Install:
npm init -y

Cypress Install:
npm install cypress --save-dev

Ru Sample Test:
npx cypress open

##Dependencies

In files below:
cypress.config.js(mochawesome)
package.json "Scripts"


# Project Title- Quality Camp Store
Auomated testing of the Quality Camp Store application focusing on the following features:

*login (Happy and Unhappy path) -
import Auth from '../page/login.page'

*Adding a Product to Cart - import addToCartPage from '../page/addToCart.page'

*Cart - import cartPage from '../page/cart.page'

*checkout (Happy and Unhappy path) -
import checkoutPage from '../page/checkout.page'

*contact (Happy and Unhappy path) - 
import contactPage from '../page/contact.page'

*productdetail- import productDetailPage from '../page/productDetail.page'

*productgallery- import productGalleryPage from '../page/productGallery.page'

*search- import searchPage from '../page/search.page'

*sort- import Auth from '../page/login.page'
 

## Running Tests

To run tests, run the following command

```bash
  npm run test

```
cross browser testing:

```bash
  npx cypress open

```

