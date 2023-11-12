export default () => {
  context('Explorer test', () => {
    const stones = ['water', 'lava', 'rock', 'bioluminescent', 'algae'];
    const assets = ['armor', 'crown', 'weapon', 'background'];
    const testStones = (parent: string, stone: string) => {
      cy.get(`${parent} [data-cy=stone-${stone}]`);
      cy.get(`${parent} [data-cy=stone-${stone}] img`);
      cy.get(`${parent} [data-cy=stone-${stone}] p`);
      cy.get(`${parent} [data-cy=stone-${stone}]`).click();
      cy.get(`${parent} [data-cy=stone-${stone}].bg-blue-500`);

      testCards(stone);
    };

    const testAssets = () => {
      for (const asset of assets) {
        cy.get('[data-cy=title-filter]')
          .contains(asset, {
            matchCase: false,
          })
          .click();
        cy.get('[data-cy=seclect-explorer]').contains(asset, {
          matchCase: false,
        });
      }
    };
    const testCards = (stone: string) => {
      cy.wait(400);
      cy.get('[data-cy=guardian-card]').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('[data-cy=guardian-stone]').contains(stone, { matchCase: false });
          cy.get('[data-cy=guardian-img]');
          cy.get('[data-cy=guardian-rank]').contains('#');
        });
      });
    };

    it('text explorer filter stones mobile', () => {
      cy.viewport(400, 800);
      cy.visit('/explorer/all/1');

      cy.get('[data-cy=explorer]');
      cy.get('[data-cy=filter-cta-mobile]').click();

      for (const stone of stones) {
        testStones('[data-cy=modal]', stone);
      }

      // test filter assets
      testAssets();

      cy.get('[data-cy=close-fitler-mobile]').click({ force: true });
      // pagination
      cy.get('[data-cy=explorer-pagination]').click();
    });

    // it('text explorer filter stones desktop', () => {
    //   cy.viewport(1440, 800)
    //   cy.visit('/explorer/all/1');
    //   // test filter stones
    //   for (const stone of stones) {
    //     testStones('[data-cy=wrapper-filters]', stone);
    //   }
    //   // test filter assets
    //   testAssets();
    //   // test number of guaridan

    //   cy.get('[data-cy=number-of-guardians]').contains('guardians', { matchCase: false })
    //   // sort by
    //   cy.get('[data-cy=sort-filter-explorer]').click()
    //   // pagination
    //   cy.get('[data-cy=explorer-pagination]').click()

    // });
  });
  ///
};
