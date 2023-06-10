//import cypress from 'cypress';
import 'cypress-xpath';

describe('Pomis1 Report', () => {
  it('should open the report successfully', () => {
    cy.visit('https://hem.mikrof.com/'); // Visit the login page

    // Enter login credentials
    cy.get('#email').type('username');
    cy.get('#password').type('password');

    // Submit the login form
    cy.get("input[value='Login']").click();

    cy.wait(2000)

    // Navigate to the report URL
    cy.visit('https://hem.mikrof.com/reports/pomis-1');

    // Assert that the report page is loaded successfully
    cy.url().should('eq', 'https://hem.mikrof.com/reports/pomis-1'); // Assert the URL is as expected
    
    cy.get('#report_level').select("Branch");
    cy.get('#filter_bazr_info').select('All');
    cy.get('.cbo_month').select('January');
    cy.get('td.cbo_year > .cbo_year').select("2023");
    cy.get("button[type='submit']").click();

    cy.get("h2 div[align='center']", {timeout: 50000}).should('be.visible').as(' POMIS-1 Report  ')
    .and('exist').then(() =>{
      cy.log('Report Open Successfully')  
      
      
      let samityMaleValue;
      let samityFemaleValue;
      let totalValue;
      
      cy.xpath('//*[@id="DivIdToPrint"]/div[1]/table[3]/tbody/tr[48]/th[3]/div')
        .invoke('text')
        .then((text) => {
          samityMaleValue = parseInt(text, 10); // Parse as an integer
          cy.log(samityMaleValue);
        });
      
      cy.xpath('//*[@id="DivIdToPrint"]/div[1]/table[3]/tbody/tr[48]/th[4]/div')
        .invoke('text')
        .then((text) => {
          samityFemaleValue = parseInt(text, 10); // Parse as an integer
          cy.log(samityFemaleValue);
        });
      
      cy.xpath('//*[@id="DivIdToPrint"]/div[1]/table[3]/tbody/tr[48]/th[5]/div')
        .invoke('text')
        .then((text) => {
          totalValue = parseInt(text, 10); // Parse as an integer
          cy.log(totalValue);
      
          cy.wrap().then(() => {
            const expectedSum = samityMaleValue + samityFemaleValue;
            cy.log('Expected:', expectedSum);
            cy.log('Actual:', totalValue);
      
            expect(totalValue).to.equal(expectedSum);
            
    });


});
       

  });

    
  });
});
