describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/');
    cy.url().should('eq', 'https://demoqa.com/'); // Replace with the expected URL
    cy.url().should('contain','demoqa');
    cy.title().should('eq', 'DEMOQA');
  })
})