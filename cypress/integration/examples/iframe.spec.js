/// <reference types="Cypress" />
context("Actions", () =>{

    beforeEach(() => {
        cy.visit("/iframeapp.html");
    })

    it("Perform iFrame data entry", () => {
        //entering text outside iframe
        cy.get("#txtName").type("Cypress");

        //entering text within an iframe
        cy.get("#frame").then($iframe => {
            //getting the body of the iframe being savec in $body
            const $body = $iframe.contents().find('body');
            //storing $body as an alias
            cy.wrap($body).as('iframe')
        })

        //using the alias iframe
        cy.get("@iframe").find('#txtNameWithiniFrame').type ("text within iframe");
    })

});