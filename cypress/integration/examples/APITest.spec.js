/// <reference types="Cypress" />

context("Test API from the Fake JSON Server", () =>{

    before("DELETE before creating a new value", () =>{
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/7',
            failOnStatusCode:false
          
        }).then((x) =>{
            expect(x.body).to.be.empty;
        });
    })

    it("Test GET functionality of JSON Server", ()=> {
        cy.request("http://localhost:3000/posts/1").its('body').should('have.property','id');
    })

    it("Test POST functionality of JSON Server", ()=> {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id": 7,
                "title": "Testing Cypress",
                "author": "Jorge Quiros"
            }

        }).then((res) =>{
            expect(res.body).has.property("title","Testing Cypress")
        });
    })

    //To test authorization is actually failing
    it("API Testing", ()=> {
        cy.request({
            method: 'POST',
            url: 'http://eaapp.somee.com/Account/Login',
            body: {
                "__RequestVerificationToken": "Szc-Db4kk579Vr_CThEC448RSfmHxjybKKQdG4MslYxWaGtCURIWIIwccb0u62vx9-_T-en_SgLDspYskLZaYBHRpBMfkF_Fli9OKDjZBLg1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode: false

        }).then(($res) =>{
            expect($res.status).to.eql(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken&quot; is not present.</i>')
        });
    })

});