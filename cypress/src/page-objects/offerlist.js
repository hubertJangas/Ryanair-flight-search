class OfferList {
  offerCard = 'flight-list [data-ref="flight-card_all_information"]';
  selectBtn = '.flight-card-summary__select-btn[data-ref="regular-price-select"]';

  getOffers() {
    return cy.get(this.offerCard);
  }

  selectFirstOffer() {
    cy.get(this.offerCard).find(this.selectBtn).first().click();
  }
}
module.exports = { OfferList };
