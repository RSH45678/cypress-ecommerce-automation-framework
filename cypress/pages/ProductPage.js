class ProductPage {

  addToCart() {

    cy.contains('Add to cart')
      .should('be.visible')
      .click();

    cy.on('window:alert', (text) => {
      expect(text).to.contain('Product added');
    });

  }

}

export default ProductPage;