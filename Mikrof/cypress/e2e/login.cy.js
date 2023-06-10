import cypress from 'cypress';


describe('Login', () => {
    
  it('should log in successfully', () => {
      
      cy.visit('https://hem.mikrof.com/'); // Visit the login page
  
      // Enter login credentials
      cy.get('#email').type('username');
      cy.get('#password').type('password');
  
      // Submit the login form
      cy.get("input[value='Login']").click();
  
      // Assert that the login was successful

      cy.url().should('include', 'mikrof.com')
      
      cy.title().should('eq', 'Dashboard').then(() => {
      
        cy.log('Login was successful'); // Print a message when login is successful

      });
    });
  });
  