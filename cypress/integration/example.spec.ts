// https://docs.cypress.io/api/introduction/api.html

/* eslint-disable */
describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/ecosystem')
    cy.contains('h3', 'Ecosystem in the sea')
    cy.contains('p', 'Our goal is to develop concrete solutions by learning from nature and its 4.5 billion years of experience. Our passion is the aquaculture of sea sponges, marine animals that form small underwater water filtration factories.')
  })
})
