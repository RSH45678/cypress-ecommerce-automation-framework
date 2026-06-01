class PlaceOrderPage {

  clickPlaceOrder() {

    cy.contains('Place Order').click();

  }

  enterOrderDetails(data) {

    cy.get('#name').type(data.customerName);
    cy.get('#country').type(data.country);
    cy.get('#city').type(data.city);
    cy.get('#card').type(data.card);
    cy.get('#month').type(data.month);
    cy.get('#year').type(data.year);

  }

  clickPurchase() {

    cy.contains('Purchase').click();

  }

  verifyOrderSuccess() {

    cy.contains('Thank you for your purchase!')
      .should('be.visible');

  }

}

export default PlaceOrderPage;