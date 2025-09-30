# Cypress Ryanair Flight Search Automation

This project contains end-to-end tests (for now just one test) for Ryanair flight search using Cypress and the Page Object Model (POM) pattern.

## Project Structure

- `cypress/e2e/` - Test specifications
- `cypress/src/page-objects/` - Page Object classes (as for now - they contain just selectors)
- `cypress/fixtures/` - Test data and configuration
- `cypress.config.js` - Cypress configuration
- `package.json` - Project dependencies

## Getting Started

### Installation on Windows

1. **Install Node.js**
   - Download and install Node.js.

2. **Install project dependencies**
   - In the project folder, run:
     ```powershell
     npm install
     ```

3. **Open Cypress UI**
   - Run:
     ```powershell
     npx cypress open
     ```

4. **Run tests in headless mode**
   - Run:
     ```powershell
     npx cypress run
     ```

## How It Works
- Test data and selectors are separated from test logic for maintainability.
- Page Objects expose selectors as class fields for direct use in tests.
- All test data (e.g. airport names and, expected texts) is stored in fixtures.

## Customization
- Update selectors in `cypress/src/page-objects/` if the Ryanair UI changes. Try experimental feature of Cypress to help yourself and set `experimentalStudio: true` in `cypress.config.js`.
 
- Add or modify test data in `cypress/fixtures/` as needed.

## Requirements
- Node v22.20.0
- Cypress 15.3.0
- Electron version: 36.8.1