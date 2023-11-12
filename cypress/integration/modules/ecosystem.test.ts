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
  describe('Ecosytem page Test', () => {
    it('visits the Ecosytem page', () => {

      cy.viewport(1440, 800)
      cy.visit('/ecosystem')
      // header ecosytem
      cy.get('h3').contains('Ecosystem in the sea')
        .get('p').contains('Our goal is to develop concrete solutions by learning from nature and its 4.5 billion years of experience. Our passion is the aquaculture of sea sponges, marine animals that form small underwater water filtration factories.')
      // poluted sea 
      cy.get('.poluted-sea')
        .get('.poluted-sea h3').contains('Polluted Seas & Oceans')
        .get('.poluted-sea p').contains('We live in an infected system, humanity has exceeded 96% overfishing. To compensate for this, we are moving to mass and polluting aquaculture, the plastic from our consumption decomposes into micro-plastics, the heavy metals from industries and agriculture end up in the sea after a long journey across rivers and water tables. If sea water is polluted, fauna and flora are polluted, and so are we. These wastes are found in all our food before accumulating in our organs, our blood, our brains. Everyone feeds on marine species. The worst thing is that among us, 1 billion people are dependent on marine resources as their main source of protein and these people are mostly from poor countries.')
        .get('.poluted-sea img')
        .get('.poluted-sea .stats-card')
      // sea sponges 
      cy.get('.poluted-sponges')
        .get('.poluted-sponges img')
        .get('.poluted-sponges h3').contains('Sea sponges to clean up water')
        .get('.poluted-sponges div h3').contains('The filtering power of sponges : Bioaccumulation ')
        .get('.poluted-sponges div p').contains('A sea sponge can filter up to 10,000 liters of water per day or nearly 3,600,000 liters per year. They are able to filter microplastics, heavy metals and toxic particles by absorbing them, literally cleaning up the seas.')
        .get('.poluted-sponges div p').contains('Did you know?')
        .get('.poluted-sponges div p').contains('There are more than 10,000 different species of sea sponges! Each one having its own needs and filtration capacities, the aquaverse team has studied them extensively to select the right species for this first project in the Mediterranean Sea.')
        .get('.poluted-sponges div h3').contains('Aquaculture')
        .get('.poluted-sponges div p').contains('A sea sponge can be cut into several pieces & each piece can grow back on its own. Depending on the species, you just have to hang them on a wire and leave them in suspension so that they pump sea water to filter it, feed themselves and clean up.')
        .get('.poluted-sponges div h3').contains('Marketing & Distribution')
        .get('.poluted-sponges div p').contains('Once the water is cleaned, we bring it in a second pond. In this one we will find the most interesting marketable sea sponges suitable for thermal insulation, agro-textile, textile, hygienic pad, face cleanser and natural shower puffs.')
        .get('.poluted-sponges a').contains('Read the roadmap')
      // alarming observation
      cy.get('.poluted-sea h3').contains('Alarming observations')
        .get('.poluted-sea p').contains('For almost a hundred years we have been dumping our debris into the ocean and continue to do so with increasing intensity. But it is now a known fact that, in addition to overfishing, warming caused by climate change, ever-increasing maritime transport, and ocean acidification, pollution is a threat to marine organisms and their habitats.')
        .get('.poluted-sea .stats-card')
        .get('.discordBlock')
        .get('.discordBlock img')
        .get('.discordBlock h3').contains('Join our Community on Discord')
        .get('.discordBlock p').contains('Be part of our amazing community and stay tuned for any news.')
        .get('.discordBlock a').contains('Become a guardian')
      // why blockchain'
      cy.get('.why-blockchain')
      cy.get('.why-blockchain h3').contains('Why Blockchain')
      cy.get('.why-blockchain p').contains('We want to make our company a participatory ecosystem in which we consider our community as members of our team. By investing in our projects, they can participate in our decision making,, follow our progress and be rewarded.')
 
      const infosBlockchainCards = [
        {
          title: 'Governance',
          content: 'Decentralized, the blockchain allows the distribution of power and decision making in a controlled and transparent manner.',
        },
        {
          title: 'Verifiable',
          content: 'Decentralized, the blockchain allows the distribution of power and decision making in a controlled and transparent manner.',
        },
        {
          title: 'Traceability',
          content: 'The blockchain being a register, it can be used to establish traceability on all kinds of products and services.',
        },
        {
          title: 'Enhanced security',
          content: 'Blockchain creates an unalterable record of transactions with end-to-end encryption, which shuts out fraud and unauthorized activity.',
        }
      ]

      for (const info of infosBlockchainCards) {
        cy.get('.advantage-card img')
        cy.get('.advantage-card p').contains(info.title)
        cy.get('.advantage-card p').contains(info.content)                
      }
      // why elrond
      cy.get('.why-elrond')
      cy.get('.why-elrond h3').contains('Why Elrond ?')
      cy.get('.why-elrond p').contains('“ Humanity’s ability to progress beyond what we thought possible not so long ago can continue only if we are conscious about our impact on the environment and the next generations. Climate change is a serious challenge, but one we can decisively solve if we act immediately ”')
 
      const infosElrondCards = [
        {
          title: 'Carbone negative',
          content: 'Carbone negative : Elrond becomes the first European carbon negative blockchain, opening a new wave of sustainable innovation in line with European climate policy. By combining Elrond’s 25% positive Co2 emission with the impact of our aquaculture, owning a Guardian becomes a true ecological act.',
        },
        {
          title: 'Accessibility',
          content: 'Maïar is a digital wallet & global payments application that allows you to exchange and store money securely on your cell phone. You can use Maiar to send and receive money almost instantly, to and from anyone in the world by simply using a phone number or herotag. All you need is a smartphone with a SIM card, running iOS or Android. The same vision of democratizing access to clearing and currency',
        },
        {
          title: 'Scalable',
          content: 'Elrond’s current network capacity is of 15,000 transactions per second, scalable to over 100,000 TPS, improving throughput and speed of execution by 1,000 times, while the energy required to process a transaction is up to 6 million times lower.',
        },
        {
          title: 'Trust in Elrond Team',
          content: 'We have complete confidence in the Elrond team and their vision. They aims to build a high-speed blockchain that aspires to build the next Internet-scale blockchain. Recognizing that most scalability efforts by other projects are not sufficient to the extent that the efforts only “throw the box down the road”, Elrond set out to create a blockchain capable of 1000x the throughput of most existing blockchains. This improved transaction throughput allows Elrond to handle even the most aggressive wave of user adoption.',
        },
        {
          title: 'NFT True Ownership',
          content: 'Elrond smart accounts are associated with a data field. This allows any account to have a key-value storage where the balances of any number of tokens can be stored. This means that tokens can actually belong to an account, instead of being associated with its address in a third-party smart contract.',
        },
      ]

      for (const info of infosElrondCards) {
        cy.get('.why-elrond .elrond-card img')
        cy.get('.why-elrond .elrond-card p').contains(info.title)
        cy.get('.why-elrond .elrond-card p').contains(info.content)                
      }
      // role of guardians 
      cy.get('.role-of-guardians')
      cy.get('.role-of-guardians img')
      cy.get('.role-of-guardians h3').contains('Guardians’ role')
      cy.get('.role-of-guardians p').contains('The Guardians of The Aquaverse are sea sponges living in Thalassa, most polluted sea in the world. Their role is to preserve the harmony of the Aquaverse. They are able to do this because of their ancient wisdom, which they draw directly from nature. They are wise and peaceful, but if you harm the harmony of the Aquaverse, they will be strong and unforgiving.')
      cy.get('.role-of-guardians .stats-card')

      // $Sponges
      cy.get('.poluted-sea h3 span').contains('$Sponges')
      cy.get('.poluted-sea p').contains('The $Sponges is the ESDT utility token of the Aquaverse ecosystem. It will allow you to exercise your governance and invest in positive impact projects, first on our aquaculture farms and secondly on external positive impact projects. Its purpose is to ensure the financing of a positive ecosystem from all points of view (environmental, social, financial) around marine sponges.')
      cy.get('.poluted-sea img')
      cy.get('.poluted-sea a').contains('Look roadmap')
      cy.get('.poluted-sea .stats-card')
      // end 
    })
  })
};
