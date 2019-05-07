// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import '@percy/cypress';

Cypress.Commands.add("login", (username, password) => {
    //Perform login click
    cy.contains("Login").click();

    //the promise then is to check something, in this case that the
    //  login button test is actually Login
    //   without alias
    //cy.get("#loginLink").then(($link) => {
        //const linkText = $link.text();
        //expect(linkText).is.equal('Login');
    //}).click();

    //with alias long way
    // cy.get("#loginLink").then(($link) => {
    //     return $link.text();
    // }).as("linkText"); //with alias
    // cy.contains("Login").click();

    //with alias shorthand way, # is for ID
    cy.get("#loginLink").invoke('text').as("linkText");

    //cy.contains("Login").click();

    //I can do this here below the click as the variable was already stored
    //  in the alias
    cy.get("@linkText").then(($x) => {
        expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login")

    //calling user that is in fixture that was passed a parameter in login function
    cy.get('#UserName').type(username);
    //calling user that is in cypress.json env
    //cy.get('#UserName').type(Cypress.env("username"));

    cy.get('#Password').type(password);

    cy.get(".btn").click({force:true});
    

})
