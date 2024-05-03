describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/');
    cy.title().should('eq', 'DEMOQA');
  })
})