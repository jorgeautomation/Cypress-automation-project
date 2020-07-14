// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
//require('cypress-dark') //not supported in Cypress 3.3.1
require('cypress-xpath');
// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

//handle the exception
Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});

// Add this so we can have the video in the mockawesome report
// Cypress.on('test:after:run', (test, runnable) => {
// 	let videoName = Cypress.spec.name;
// 	videoName = videoname.replace('/.js.*', '.js');
// 	const videoURL = 'videos/' + videoName + '.mp4';

// 	addContext({ test }, videoURL);
// });
