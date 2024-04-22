describe('signup on contact list app', () => {
  it('navigates to signup form when signup button is clicked', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#signup').click()
  
  })
})