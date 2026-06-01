class HomePage {

  open() {
    cy.visit('/');
  }

  selectProduct(productName) {

    cy.contains(productName)
      .should('be.visible')
      .click();

  }

}

export default HomePage;