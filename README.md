## Xyconic React Redux Demo with Jest Unit Testing and Cypress Integration Testing
- Displays a React Redux Application which can search Restaurants and display the information
- Has precommit hooks for linting and testing both Jest and Cypress
- Has a City Search filed for the inital request to the BE API
- Has a REDUX store
- Has 4 filters. These filters are not case sensitive and can search partial results.
- Maximum results returned is 100
- Is responsive (Tested in all Google Chrome test scenarios and both orientations)
- Has HOC in containers folder and Components and PureComponents in Components Folder.
- Has been tested for WCAG AA compliance and Passes Lighthouse audit
- Is hosted on heroku https://xyconicdemo.herokuapp.com/
- Uses eslint and AirBnB rules with custom rules
- Uses ES6

## See Below for Additional Details


## Environment dependencies

- Node.js 8+ (I used Node 10.16.0)
- Reasonably recent version of a modern browser (Chrome, Firefox, Edge, Safari)

## Setup
**Install npm dependencies**
$ npm install

## Starting the servers
$ npm start - starts the the react app
$ npm run cypress:open starts the cypress server (the application must be running!)

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run cypress:run](#npm-cypress:run)
  - [npm run cypress:open](#npm-cypress:open)
  - [npm run build](#npm-run-build)
  - [npm test](#npm-test)
  - [npm run lint](#npm-run-lint)
  - [npm run lint_project_fix](#npm-run-lint_project_fix)
  - [npm start](#npm-start)

- [VSCode Extensions](#vscode-extensions)
  - [Add the following Extensions for maximum coding experience to VSCode](#vscode-extensions)
- [Supported Browsers](#supported-browsers)
- [Eslint](#eslint)
- [pre-commit](#pre-commit)
- [precommit_actions](#pre-Commit-Actions)
- [VSCode Preferences](#VSCode-Preferences)
- [Post-Processing CSS](#Post-Processing-CSS)
- [Adding CSS Preprocessor](#Adding-CSS-Preprocessor)

## Folder Structure

To Be Added

  For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

  ### `npm start`
  ### `npm run start`

  Runs the app in the development mode.<br>
  Open [http://localhost:3000] to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.

  Note: This should automatically open the default browser [run-is-optional]

  ### `npm test`
  run mocha tests
  mocha documentation - https://mochajs.org/api/mocha.js.html

  ### `npm run build`

  Builds the app for production to the `build` folder.<br>
  It correctly bundles React in production mode and optimizes the build for the best performance.

  ### `npm run cypress:open`

  Runs cypress - launches a cypress application which can launch testing in chrome

  ### `npm run cypress:run`

  Runs cypress - launches a cypress in the command line(used for commit hooks to run cypress tests)

  ### `npm run test`

  Use this script to test the project in watch mode. This script is the standard out of the box from [react-scripts-and-uses-jest]. This is a great test to run while developing for maximum efficiency when coding.
  
  ### `npm run lint`

  Use this script to run project wide eslint report in console or pipe to a file >filename -- in quiet mode

  ### `npm run lint_project_fix`

  Use this script to run project wide eslint with --fix for autofix on project in quiet mode (no warnings)

## VSCode Extensions 

Use these Extensions in VSCode for maximum coding experience

- Babel ES6/ES7
- Babel Javascript
- Debuggger for Chrome
- ES7 React/Redux/GraphQL/React-Native snippets
- JavaScript (ES6) code snippets
- Node.js Extension Pack
- npm
- TODO Highlight: example in index.js
- Prettify JSON
- Python
- React Native Tools
- Sublime Babel
- Search Node ModuleTODO Hightlight
- ESLint https://eslint.org/
- HTMLHint https://htmlhint.io/
- Sass
- Sass Lint https://github.com/sasstools/sass-lint


## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Eslint
code quality is included as a devDependency and includes project check scripts for auto fix and precommit hooks
see 
- [npm run lint](#npm-run-lint)
- [npm run lint_project_fix](#npm-run-lint_project_fix)
- [pre-commit](#pre-commit)
local config in .eslintrc.json
extends 'airbnb'


AirBnB Rules see:
- https://www.npmjs.com/package/eslint-config-airbnb

## Pre-Commit

pre-commit is a git hook which will run scripts and only complete if tests and linting passes.
--no-verify overrides the pre-commit(can be enforced in build CI system using hooks in repository tooling)

"pre-commit": [
    "lint",
    "test"
  ]

## Pre-Commit-Actions
- [precommit is set to run tests and lint before committing](#pre-Commit-Actions)

# VSCode Preferences
- use this as a starting point to get the best out of VS Code

VSCode File>Preferences>Settings or CTRL+

{
  "eslint.autoFixOnSave": true,
  "eslint.provideLintTask": true,
  "eslint.alwaysShowStatus": true,
  "css.lint.duplicateProperties": "error",
  "emmet.includeLanguages": {
    "javascript": "react"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "sasslint.enable": true,
}





