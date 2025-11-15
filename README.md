 Cypress Take Home Assignment – Numeo
 Project Overview
This project demonstrates my ability to design and implement a robust test automation framework*using Cypress for web applications and APIs.  

The tests cover critical user flows, API endpoints, and are integrated into a CI/CD pipeline using GitHub Actions for automatic execution on every commit.


 Project Structure
numeo-cypress-takehome/
├─ cypress/
│ ├─ e2e/
│ │ ├─ task.cy.js # Web application tests
│ │ └─ api.cy.js # API tests (GET, POST, PUT, DELETE)
├─ node_modules/
├─ .github/
│ └─ workflows/
│ └─ cypress.yml # GitHub Actions workflow
├─ package.json
└─ README.md

Test Strategy
- Web Tests: Covers login, critical user flows, and validation of main functionality.  
- API Tests: Covers GET, POST, PUT, DELETE requests to ensure backend endpoints behave correctly.  
- Prioritization: Automated critical flows first; minor flows can be added later.  
- Maintenance:*Tests are modular, readable, and easy to extend for new functionality.  


CI/CD Integration
- GitHub Actions Workflow: `.github/workflows/cypress.yml`  
- Workflow Steps:
  1. Checkout code
  2. Set up Node.js
  3. Cache Node modules
  4. Install dependencies
  5. Run Cypress tests (`npx cypress run`)
  6. Upload videos and screenshots as artifacts
- Benefits: 
  - Automated test execution on every commit.  
  - Immediate feedback on failures.  
  - Easy review of test results via logs, videos, and screenshots.  


Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/aadrishrustam/numeo-cypress-takehome.git
Dependencies
npm install
npx cypress open    =For interactive mode
npx cypress run    = For headless execution

Notes

Tests are designed to be robust and maintainable.

API tests include handling responses, status codes, and validations.

Cypress videos and screenshots are captured for all test runs.

This setup demonstrates the ability to deliver high-quality automation with CI/CD integration.

Repository Link

https://github.com/aadrishrustam/numeo-cypress-takehome
