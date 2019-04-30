import {Given} from 'cypress-cucumber-preprocessor/steps'
import {loginPage} from "../../examples/pages/loginpage"

Given('I visit EA Site',() => {
    cy.visit('http://eaapp.somee.com');
});

Given('I click login link',() => {
    cy.contains("Login").click();  
});

Given('I login as user with {string} and {string}',(userName, password) => {
    cy.get('#UserName').type(userName);
    //put log:false so in the cypress log you cannot see the password
    cy.get('#Password').type(password,{log:false});
    cy.get(".btn").click();
});

Given('I login as following',dataTable => {
    dataTable.hashes().forEach(row => {
        //cy.get('#UserName').type(row.userName);
        //cy.get('#Password').type(row.Password,{log:false});

        loginPage.performLogin(row.userName, row.Password);

    });
    //Instead of direct click
    //cy.get(".btn").click();
    //use page object model
    loginPage.clickLoginButton();
});