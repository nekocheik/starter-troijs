const urls: string[] = ['ecosystem', 'explorer', 'about' ]
const testUrl = (link: string, mobile?: boolean): void => {
  // open menu burger on mobile
  mobile ? cy.get('[data-cy=menu-burger]').click() : null;
  // click on link
  cy.get(`${mobile ? '[data-cy=wrapper-links-mobile]' : '[data-cy=menu-desktop]'} .link-${link}`).click()
  // check url
  cy.url().should('include', `/${link}`)
}

export default () => {

  context('Navigation desktop', () => {
    it('can navigate around the website', () => {
      cy.viewport(1440, 800)
      cy.visit('/');
      cy.get('[data-cy=menu-desktop]')
      for (const url of urls) { 
        testUrl(url)
      }
      
      // test ecosytem page
      cy.get('[data-cy=menu-desktop] > a').click()
      cy.get('h1').contains('The NFT that cleans the sea')
      // test wallet
      cy.get('[data-cy=menu-desktop] .connect-wallet').click()
      cy.url().should('include', 'modalOpen=WalletMaiar')

    });
  });


  context('Navigation mobile', () => {
    it('can navigate around the website', () => {
      cy.viewport(390, 844)
      cy.visit('/');
      // test ecosytem page
      
      for (const url of urls) {
        testUrl(url, true)
      }
      // test explorer home
      cy.get('#menu .logo-aquaverse a').click()
      cy.get('h1').contains('The NFT that cleans the sea')
      // test modal open
      cy.get('[data-cy=menu-burger]').click() 
      cy.get('#menu .connect-walet-mobile').click()
      cy.url().should('include', 'modalOpen=WalletMaiar')

    });
  });
};
