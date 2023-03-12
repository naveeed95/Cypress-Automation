describe('Amazon test', () => {
    it('should search for a dress, add it to cart, and validate order summary', () => {
      // Open Amazon website
      cy.visit('https://www.amazon.in/');
  
      // Login with email and password
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').type('email@example.com');
      cy.get('#ap_password').type('password');
      cy.get('#signInSubmit').click();
  
      // Search for a dress
      cy.get('#twotabsearchtextbox').type('dress');
      cy.get('.nav-search-submit .nav-input').click();
  
      // Select a dress and go to the product detail page
      cy.get('.s-result-item').first().find('img').click();
      cy.get('#a-autoid-0-announce').click();
  
      // Select a size and add to cart
      cy.get('#dropdown_selected_size_name').click();
      cy.get('#size_name_1').click();
      cy.get('#add-to-cart-button').click();
  
      // Go to cart and validate order summary
      cy.get('#hlb-view-cart-announce').click();
      cy.get('.sc-subtotal .a-color-price').invoke('text').then((subtotal) => {
        cy.log('Subtotal:', subtotal);
        expect(subtotal).to.include('100.00'); // replace with the actual subtotal
      });
      cy.get('.a-row.sc-product-title').invoke('text').then((title) => {
        cy.log('Product title:', title);
        expect(title).to.include('Dress'); // replace with the actual product title
      });
  
      // Proceed to buy and take a screenshot of the login popup screen
      cy.get('#sc-buy-box-ptc-button').click();
      cy.get('#a-popover-5 .a-button-input').click();
      cy.wait(1000); // wait for the popup screen to load
      cy.screenshot('login-popup');
    });
  });
  
