// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {

  //cucumber
  on('file:preprocessor', cucumber())

  //this one is for handling browsers
  on('before:browser:launch', (browser = {}, args) => {
    if(browser.name==='chrome'){
      //args.push('--start-fullscreen')
      //args.push('--incognito')
      return args
    }
    if(browser.name==='electron'){
      //args['fullscreen'] = true
      return args
    }
  })

  function processConfigName(on, config){
    //look this || basically if not env name variable is passed, it will take default.json
    const file = config.env.name || "default"
    
    return getConfigFile(file).then(function(file){ 
      //return file object
      return file
    })

  }

  function getConfigFile(file){
    //path is a constant assigned at the top, the thing in parenthesis is the actual path
    //  separated by commas
    const pathToConfigFile = path.resolve('cypress','config',`${file}.json`)
    //fs is a constant assigned at the top
    return fs.readJson(pathToConfigFile)
  }

  //returning the configuration file details
  return processConfigName(on, config)

}
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
