/// <reference types="Cypress" />

export class LoginPage{

    performLogin(userName, password){
        //cy.get('#UserName').type(userName);
        //you can use xpath as cypress-xpath module was added
        cy.xpath('//input[@id="UserName"]').type(userName);
        //we will leave password with ID
        cy.get('#Password').type(password,{log:false});
    }

    clickLoginButton(userName, password){
       cy.get('.btn').click();
    }


}

//the following is created instead of using creating a new class, like a new LoginPage in
//  the main page, so we create a constant, therefore use the export keayboard in the class
export const loginPage = new LoginPage();