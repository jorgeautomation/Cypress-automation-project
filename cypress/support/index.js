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
import addContext from 'mochawesome/addContext';

// Alternatively you can use CommonJS syntax:
// require('./commands')

//handle the exception
Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});

// Add this so we can have the video in the mockawesome report
const titleToFileName = (title) => title.replace(/[:\/]/g, '');
Cypress.on('test:after:run', (test, runnable) => {
	const filename = `${titleToFileName(runnable.parent.title)} -- ${titleToFileName(test.title)} (failed).png`;
	addContext({ test }, `../cypress/videos/${Cypress.spec.name}.mp4`);
	//if failed also add screenshots
	if (test.state === 'failed') {
		addContext({ test }, `../cypress/screenshots/${Cypress.spec.name}/${filename}`);
	}

	// let videoName = Cypress.spec.name;
	// videoName = videoName.replace('/.js.*', '.js');
	// const videoUrl = 'videos/' + videoName + '.mp4';
	// console.log(`this is the path: ${videoUrl}`);

	// addContext({ test }, videoUrl);
});
