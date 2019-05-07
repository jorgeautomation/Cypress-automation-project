// The reference directive /// lets you include a script file in the scripting context 
//  of the current script file. This enables IntelliSense to reference externally defined
//   functions, types, and fields as you code.

/// <reference types="Cypress" />
import '@percy/cypress';

describe("Testing of EA Site", () => {

    beforeEach("Call for a particular it block",() => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing EA Site for assertion", () => {
       
        //IMPLICIT ASSERTION, [] is used to get an specific attribute with value
        //cy.get("[aria-label='jump to slide 2']",{timeout:15000}).should('have.class','ls-nav-active');

        //User of Percy
        //cy.percySnapshot();

        //EXPLICIT ASSERTION, calling a callback
        cy.get("[aria-label='jump to slide 2']",{timeout:15000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active")
        })

        //cy.percySnapshot();

    })

    it("Testing EA Site for assertion with hooks", () => {
       
        //IMPLICIT ASSERTION, [] is used to get an specific attribute with value
        //cy.get("[aria-label='jump to slide 2']",{timeout:15000}).should('have.class','ls-nav-active');

        cy.percySnapshot();

        //EXPLICIT ASSERTION, calling a callback
        cy.get("[aria-label='jump to slide 2']",{timeout:15000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active")
        })

        //cy.percySnapshot();

    })

})

