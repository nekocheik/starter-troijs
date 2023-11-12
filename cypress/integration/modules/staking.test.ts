export default () => {

  context('Staking test', () => {



    it('visit staking default mobile', () => {
      cy.viewport(400, 800)
      cy.visit('/staking');
      
      cy.get('[data-cy=title-staking]').contains('Guardians staking')
      cy.get('[data-cy=connect-wallet-default-staking]').contains('Connect Wallet').click()
      cy.get('[data-cy=modal-connect]')
    });  

    it('visit staking connected mobile', () => {
      cy.viewport(400, 800)
      cy.visit('/staking?erdTest=test');
      
      cy.get('[data-cy=board-in-mission]')
      cy.get('[data-cy=board-information-mission]')
      cy.get('[data-cy=send-guardian-board]') 
    });  
  });
  ///


};
