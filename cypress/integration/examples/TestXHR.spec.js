/// <reference types="Cypress" />

describe("Test LambdaTest website XHR", () =>{

    before("Login to application",() => {
        cy.visit("https://accounts.lambdatest.com/login");
    });
    
    it("Perform Login and verify XHR", () =>{

        //start the server for XHR
        cy.server();
        
        //Use cy.route() to manage the behavior of network requests, also using alias
        cy.route({
            method:'GET',
            url: '/api/user/organization/team'
        }).as('team');

        cy.route({
            method:'GET',
            url: '/api/user/organization/automation-test-summary'
        }).as('apicheck');


        cy.fixture("lambda").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
            cy.get("[name='email']").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password,{log:false});
        })

        cy.get("[class='btn btn-primary btn-lg btn-block mt-3']").click();

        //different XHR assertions
        cy.get("@team").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body.data[0]).to.have.property("name","Jorge Quiros")
            expect(xhr.response.body.data[0]).to.have.property("role","Admin")
        })

        //traffic intersection, explicit assertion
        cy.get("@apicheck").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).to.have.property("maxQueue",10)
        })

        //implicit 
        cy.get("@apicheck").its('response.body').should('have.property','maxQueue').and('eql',10);
  
    
    })
})