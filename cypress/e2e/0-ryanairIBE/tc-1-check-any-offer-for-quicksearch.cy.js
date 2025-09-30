const { Cookies } = require('../../src/page-objects/cookies');
const { Homepage } = require('../../src/page-objects/homepage');
const { FlightSearchWidget } = require('../../src/page-objects/flightsearch');
const { OfferDetails } = require('../../src/page-objects/offerdetails');
const { OfferList } = require('../../src/page-objects/offerlist');

describe('TS-1 - Ryanair flight search, offer selection and details', () => {
  let data;


  before(function() {
    cy.fixture('flightSearchData').then(fixtureData => {
      data = fixtureData;
    });
  });

  it('TC-1 - Check any offer for quick search', () => {
    const homepage = new Homepage();
    const cookies = new Cookies();
    const flightSearch = new FlightSearchWidget();
    const offerDetails = new OfferDetails();
    const offerList = new OfferList();

    // 1.1 - open homepage
    cy.visit(homepage.url);
    cy.url().should('include', homepage.url);

    // 1.2 - accepting cookies and checking popup gone
    cy.get(cookies.acceptBtn).click();
    cy.get(cookies.popup).should('not.exist');


    // 2.1 - flightsearch widget - check one-way
    cy.get(flightSearch.oneWayBtn).click();
    cy.get(flightSearch.oneWayChecked).should('exist');

    // 2.2 flight search - set departure and check
    cy.get(flightSearch.departureInput).click().clear()
      .type(data.departureName)
      .get(`${flightSearch.airportList}${data.departureId}"]`).click();
    cy.get(flightSearch.departureInput).should('have.value', data.departureName);

    // 2.3 flight search - set destination and check
    cy.get(flightSearch.destinationInput).click().clear().type(data.destinationName)
      .get(`${flightSearch.airportList}${data.destinationId}"]`).click();
    cy.get(flightSearch.destinationInput).should('have.value', data.destinationName);

    // 3.1 flight search - set date and check
    cy.get(flightSearch.dateCell).first().click();
    cy.get(flightSearch.dateDisplay).should(($el) => expect($el.text().trim()).not.to.equal(data.datePlaceholder));

    // 3.2 flight search - accept default passengers count and search
    cy.get(flightSearch.passengersConfirm).click();
    cy.get(flightSearch.searchBtn).click({force: true});
    cy.url().should('include', data.searchFlightUrlPart);
    
    // 4.1 offer list - check whether offers are present and select the first one
    cy.get(offerList.offerCard).should('have.length.greaterThan', 0);
    cy.get(offerList.offerCard).find(offerList.selectBtn).first().click();

    // 5.1 offer details - check whether fare header is present
    cy.contains(offerDetails.fareHeader, data.fareHeaderText).should('exist');
  });
});