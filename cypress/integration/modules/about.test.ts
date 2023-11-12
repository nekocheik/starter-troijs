
/* eslint-disable */
export default () => {
  // describe("Home page displaying with content", () => {
  //   it("visits the app root url", () => {
  // 		cy.viewport(1366, 750)
  //     cy.visit("/");
  //     // cy.contains("h1", " The NFT ");
  //     // cy.contains("body", "Our partners");
  //     // cy.contains("body", "The power of sea sponges");
  //     // cy.contains("body", "The power of sea sponges");
  //     cy.get(
  //       "#menu > div.menu--desktop.hidden.xl:flex.sm:h-[76px].items-center.justify-between.relative.mx-[16px].ml-[40px] > div.flex.items-center > div > a:nth-child(1)"
  //     ).click({ force: true });
  //   });
  // });
  describe('About page Test', () => {
    it('visits the About page', () => {

      cy.visit('/about')
      cy.viewport(1440, 800)
      // header about 
      cy.contains('h1', 'Who leads the ship?')
        .contains('p') // test content why ok and after not ok 
        .get('img')
      // roadmap
      cy.get('.container--drag')
        .get('.container--drag h3').contains('Discover our road map')
        .get('.container--drag p').contains('Drag to scroll the road map')
        .get('.container--drag .wrapper-drag .wrapper--img')
        .get('.container--drag .wrapper-drag .wrapper--img img')
      // looking for moree details
      cy.get('.white-paper')
        .get('.white-paper img')
        .get('.white-paper p').contains('Looking for more details?')
        .get('.white-paper p').contains('Learn more about the benefits to our community and our early investors.')
        .get('.white-paper a').contains('Download Whitepaper')
      // team 
      cy.get('h1').contains('Discover our team')
        .get('h3').contains('Founders')
        .get('h3').contains('Product Team')
        .get('h3').contains('Creator team')
        .get('h3').contains('Operational Resources')
        .get('h3').contains('Marketing & Communication')
        .get('h3').contains('Advisor & Ambassador')

    })
  })
};
