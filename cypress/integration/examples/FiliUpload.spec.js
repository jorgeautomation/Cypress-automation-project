/// <reference types="Cypress" />

context("Actions", () =>{

    beforeEach(() => {
        //From we are going to read from
        cy.visit("https://fineuploader.com/demos.html");
    })



it("File upload demo", () => {
    //cy.percySnapshot();

    cy.fixture('repository.png','base64').then(fileContent => {
        
        //Taken from the selector playground of Cyppress
        cy.get("#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input")
            .upload({
                fileContent,
                fileName: 'repository.png',
                mimeType: 'image/png'
            },
            {
                uploadType: 'input'
            });

    });
    //cy.percySnapshot(); 
});

});