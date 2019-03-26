# Cypress
Cypress automation project

Installation
- Need to have npm in your machine (nodejs)
- Npm install cypress
- Note: you can use a package.json to install cypress as dev dependency
   - Npm install --save-dev cypress
    It will create the node_modules which you don’t have to git, just run npm install once you clone the project and it will create the dependencies in your machine

Running it
- Open with visual code
- You can use npx to run binaries, in case of cypress is very handy so just type (npm should be greater than 5.2)
  - npx cypress open (npm should be greater than 5.2)
- It will open a playground for you, with examples, also it creates a folder in your project called cypress
  - This message appears: We've added some folders and example tests to your project. Try running the tests in the examples folder or add your own test files to cypress/integration.
- It also creates a cypress.json in the root of the project
- You can click any of these examples in the playground to see what happens
- Also to add your own code you can use the /integration/examples folder
- You can also run it from command line, it will give you statistics about the runner
  - Npx cypress run --spec pathtofile/file.js
  - additionally you can use --browser chrome to run it in non headless mode

How it runs
- It uses blocks called ‘IT’, each ‘it’ is like an scenario, you 
- You can use either describe (this is the method) or context (which is the alias of describe)
- If yopu have my example opened in the Cypress playground and change the code it will automatically execute it and check for the elements in real time, without having to run it again (no waiting, no stopping and running again, no drivers for Selenium)
- The open selector playground helps to identify elements without doing anything!
- Time traveling is the feature that allows you to move between all the steps in the browser window for Cypress where you can see the different steps in real time


