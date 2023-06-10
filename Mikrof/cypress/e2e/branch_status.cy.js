
//import cypress from 'cypress';
import 'cypress-xpath';


describe('BranchStatus', () => {
    
    it('should branch status open successfully', () => {
        
        cy.visit('https://hem.mikrof.com/'); // Visit the login page
    
        // Enter login credentials
        cy.get('#email').type('username');
        cy.get('#password').type('password');
    
        // Submit the login form
        cy.get("input[value='Login']").click();
    
        // open branch status

        cy.get('.nav > :nth-child(3) > a').click();

        
        let expectedElement = " Branch Status ( HEM ) ";

        cy.xpath('//*[@id="DivIdToPrint"]/h1', { timeout: 50000 }).then((x) => {

            let actualElement = x.text()

            assert.equal(expectedElement,actualElement)
            cy.log('Branch Status Open Successfully')
            


        });

        
      });
    });
    