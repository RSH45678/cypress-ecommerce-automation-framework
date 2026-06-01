class CartPage {

  openCart() {

    cy.contains('Cart')
      .click();

  }

  verifyProduct(productName) {

  cy.url().should('include', 'cart.html')

  cy.get('#tbodyid', { timeout: 10000 })
    .should('be.visible')

  cy.contains(productName, { timeout: 10000 })
    .should('exist')

}

}

export default CartPage;