describe('API Testing with Cypress', () => {
    it('should retrieve contact list', () => {
      cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {
            Authorization: `Bearer ${Cypress.env('token')}`, 
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.length.greaterThan(0);
        });
      });
    });




    function deleteContact(contactId) {
        return cy.request({
          method: 'DELETE',
          url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, // Include the contact ID in the URL
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      
      describe("DeleteContact API Testing with Cypress", () => {
        it("Deletes Contact details for a specific ID", () => {
          const contactId = 123; 
          deleteContact(contactId).then((response) => {
            expect(response.status).to.eq(204); 
        });
      });






      function updateContact(contactId) {
        return cy.request({
          method: 'PUT',
          url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, // Include the contact ID in the URL
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
      }
      
      describe("PUT contactUpdate API Testing with Cypress", () => {
        it("Updates contact details for a specific ID", () => {
          const contactId = 123; 
          updateContact(contactId).then((response) => {
            expect(response.status).to.eq(204); 
          });
        });
      });
      




      describe('API Testing with Cypress', () => {
        it('should retrieve contact', () => {
          cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
            headers: {
              Authorization: `Bearer ${Cypress.env('token')}`, 
              'Content-Type': 'application/json'
            }
          }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.length.greaterThan(0);
          });
        });
      });
    



      describe("API Testing with Cypress AddContact", () => {
        it("Creates a Contact and retrieves details", () => {
          const addingData = {
            "firstName": "John",
            "lastName": "Doe",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA"
          };
      
          cy.request({
            method: 'POST',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
            body: addingData, 
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body).to.have.property("contactid"); 
          });
        });
      });
      


      describe('API Testing with Cypress', () => {
        it('should retrieve User Profile', () => {
          cy.request({
            method: 'GET',
            url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
            headers: {
              Authorization: `Bearer ${Cypress.env('token')}`, 
              'Content-Type': 'application/json'
            }
          }).then((response) => {
            expect(response.status).to.be.oneOf([200, 204]); 
            if (response.status === 200) {
              expect(response.body).to.have.length.greaterThan(0);
            }
          });
        });
      });