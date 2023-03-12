# Cypress-Automation
Automation code for Amazon.in

This is a Cypress program that tests the Amazon website by searching for a dress, adding it to cart, and validating the order summary.
Setup

To run this program, you need to have Node.js and Cypress installed on your machine. You can download and install Node.js from nodejs.org, and then install Cypress by running the following command:

npm install cypress --save-dev

**Usage**

To run the tests, open the Cypress Test Runner by running the following command:

npx cypress open


This will open the Cypress Test Runner, where you can select the amazon.spec.js file and run the tests.

Alternatively, you can run the tests in headless mode by running the following command:

npx cypress run

This will run the tests in the background and generate a report of the results.

**Tests**

The amazon.spec.js file contains a single test that performs the following steps:

    Open Amazon in the browser
    Login with email and password
    Search for a "dress"
    Select any "dress" from the search page
    Go to the product detail page & select the size
    Click on “ADD TO CART”
    Click on “GO TO CART”
    Validate Order summary - Price & Quantity - Print & assert them
    Lastly, click “Proceed to buy” & on the Login popup screen take a screenshot

The test uses Cypress commands and assertions to interact with the website and validate the results.
