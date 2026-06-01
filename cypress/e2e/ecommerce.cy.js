import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const placeOrderPage = new PlaceOrderPage();

describe('E-Commerce Automation Framework', () => {

  beforeEach(() => {
    homePage.open();
  });

  it('Verify Home Page Loads Successfully', () => {

    cy.contains('PRODUCT STORE')
      .should('be.visible');

  });

  it('Verify Product Selection', () => {

    cy.fixture('productData').then((data) => {

      homePage.selectProduct(data.productName);

      cy.contains(data.productName)
        .should('be.visible');

    });

  });

  it('Verify Add Product To Cart', () => {

    cy.fixture('productData').then((data) => {

      homePage.selectProduct(data.productName);

      productPage.addToCart();

    });

  });

  it('Verify Product Available In Cart', () => {

    cy.fixture('productData').then((data) => {

      homePage.selectProduct(data.productName);

      productPage.addToCart();

      cartPage.openCart();

      cartPage.verifyProduct(data.productName);

    });

  });

  it('Verify Complete Product Purchase Flow', () => {

  cy.fixture('productData').then((data) => {

    homePage.selectProduct(data.productName);

    productPage.addToCart();


 cy.wait(2000)

    cartPage.openCart();

    cartPage.verifyProduct(data.productName);

    placeOrderPage.clickPlaceOrder();

    placeOrderPage.enterOrderDetails(data);

    placeOrderPage.clickPurchase();

    placeOrderPage.verifyOrderSuccess();

  });

});

});