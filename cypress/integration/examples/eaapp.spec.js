
/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    before("Login to application",() => {
        //Go to app 
        cy.visit("http://eaapp.somee.com/");
        //reading the file to get data from
        cy.fixture("eauser").as("user");


        //Here we are going to get the data from fixtures folder, file eauser.json
        //  @user comes from before
        cy.get("@user").then((user) => {

            // //for data driven values used directly in the fields
            // cy.get('#UserName').type(user.UserName);
            // cy.get('#Password').type(user.Password);

            //using custom command that is in commands.js also with data driven
            cy.login(user.UserName, user.Password);
        })


    })

    it("Performing Benefit Check", () => {
       
        // . for for class, this is included now in the custom command cy.login
        //cy.get(".btn").click({force:true});

        //Click the employee list
        cy.contains("Employee List").click();

        //Table, > symbol is to identify within the tr
        //cy.get('.table').find('tr > td');

        //Get the click for specific row where it contains 'Prashant' the the parent
        //  contains benefits
        cy.get('.table').find('tr').contains('Prashant').parent().contains('Benefits').click();

        //Alias for rows and using wrapping
        cy.get('.table').find('tr').as("rows");
        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple:true});
        });

        //verify the value from a property from a JSON file {name:'Karthik'}
        //  this is not part of this web test, this is to make a point regarding
        //  how to validate json files
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik')

        //using wrap
        // cy.get('.table').find('tr > td').then(($td) => {
        //     //with this wrap we are taking all the tds, then call the invoke which is a 
        //     //  shorthand for the invoke
        //     cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        // })


    })
})