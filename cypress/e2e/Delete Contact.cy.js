
describe('login to contact list app', () => {
  it('logs into the contact list app with valid credentials', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('#email').type('hitone956@gmail.com');
    cy.get('#password').type('darkice9566');
    cy.get('form').submit();
    cy.get(':nth-child(3) > :nth-child(2)').click();cy.get('#delete')
    
  });
});
