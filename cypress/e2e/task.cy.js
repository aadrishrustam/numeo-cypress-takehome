describe('SauceDemo Critical Flows', () => {

  const baseUrl = 'https://www.saucedemo.com/';
  
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Valid Login', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory');
    cy.contains('Products').should('be.visible');
  });

  it('Invalid Login', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('contain', 'Epic sadface')
      .and('be.visible');
  });
    it('Complete checkout flow', () => {
    // Login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Add item to cart
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Go to cart
    cy.get('.shopping_cart_link').click();

    // Start checkout
    cy.get('[data-test="checkout"]').click();

    // Fill checkout form
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');

    cy.get('[data-test="continue"]').click();

    // Finish order
    cy.get('[data-test="finish"]').click();

    // Validate success message
    cy.contains('Thank you for your order!').should('be.visible');
  });


});
