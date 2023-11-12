
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
  describe('Home page Test', () => {
    it('visits the home page', () => {

      cy.visit('/')
      cy.viewport(1440, 800)
      // header home 
      cy.contains('h1', 'The NFT that cleans the sea')
      cy.contains('p', 'Aquaverse is a complete ecosystem allowing to act in a concrete way on the pollution of our seas and oceans, combining Ecology, Blockchain & Gaming.')
      cy.contains('a', 'Learn more')
      // assurances
      cy.contains('p', 'Our partners')
      cy.get('.wrapper--logo img')
      // power sponge
      cy.contains('h2', 'The power of sea sponges')
      cy.contains('p', 'Sponges are marine animals with unique and surprising abilities! Here are some of them that might interest you:')
      // aquaculture
      cy.get('div.aquaculture > .aquaculture--step')
        .get('div.aquaculture > img')
        .get('div.aquaculture > span > a').contains('Learn more')
      // join our comunity
      cy.get('.discordBlock')
        .get('.discordBlock > img')
        .get('.discordBlock > h3').contains('Join our Community on Discord')
        .get('.discordBlock > a').contains('Become a guardian')
      // ecologic revolution
      cy.get('.ecologic--revolution')
        .get('.ecologic--revolution > h3').contains('Building the ecological revolution')
        .get('.ecologic--revolution > p').contains('Our ecosystem allows you to invest in both our aquacultures and our sea sponge factories')
        .get('.ecologic--revolution > img')
        .get('.ecologic--revolution > div')
        .get('.ecologic--revolution > div > div')
        .get('.ecologic--revolution > div > div > img')
        .get('.ecologic--revolution > div > div > h3')
        .get('.ecologic--revolution > div > div > p')
        .get('.ecologic--revolution .step-cycle')
      // become a guardian 
      cy.get('.wrapper--become')
        .get('.wrapper--become section > img')
        .get('.wrapper--become > section > p').contains('Clean up the oceans by joining the project')
        .get('.wrapper--become > section > a').contains('Discover guardians')
      // benefits
      cy.get('.benefits-section')
        .get('.benefits-section h3').contains('What are the benefits for investors?')
        .get('.benefits-section .advantage-block')
        .get('.benefits-section .advantage-block div img')
        .get('.benefits-section .advantage-block div h3')
        .get('.benefits-section .advantage-block div p')
      // team
      cy.get('.team')
        .get('.team h3').contains('The co-founder of the project')
        .get('.team .team--content')
        .get('.team .team--content section div section img')
        .get('.team .team--content .team')
        .get('.team .team--content .team h3')
        .get('.team .team--content .team p')
        .get('.team .team--content .team div a')
    })
  })
};
