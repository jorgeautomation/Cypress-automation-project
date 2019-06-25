/// <reference types="Cypress" />

context("Test pop up window", () =>{

    beforeEach(() =>{
        cy.visit("http://executeautomation.com/demosite/Login.html");
    })

    it('Perform login', () => {
        cy.get("[name='UserName']").type("admin")
        cy.get("[name='Password']").type("password")
        cy.get(':nth-child(3) > input').click()

        //click the generate pop up button
        cy.get("[name='generate']").click()

        cy.on('window.window:confirm', (str) => {
            expect(str).to.eq('You generated a Javascript alet')
            return true
        })
    })

})