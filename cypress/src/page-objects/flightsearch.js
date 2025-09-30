class FlightSearchWidget {
  oneWayBtn = '[data-ref="flight-search-trip-type__one-way-trip"] .ry-radio-circle-button__label';
  oneWayChecked = '[data-ref="flight-search-trip-type__one-way-trip"] .ry-radio-circle-button__checked';
  departureInput = '#input-button__departure';
  destinationInput = '#input-button__destination';
  airportList = 'fsw-airports-list [data-ref="airport-item__name"][data-id="';
  dateCell = 'fsw-flexible-datepicker-container [data-type="day"]:not(.calendar-body__cell--disabled)';
  dateDisplay = '[data-ref="input-button__display-value"]';
  passengersConfirm = '.passengers__confirm-button[aria-label="Gotowe"]';
  searchBtn = '[data-ref="flight-search-widget__cta"]';
}
module.exports = { FlightSearchWidget };
