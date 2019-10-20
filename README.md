# LAB - 06

## Data Modeling With NoSQL Databases

### Author: Nadya Ilinskaya/Seattle-js-401n14

### Links and Resources
* [submission PR](https://github.com/nadili-401-advanced-javascript/lab-06/pull/1)
* [travis](https://travis-ci.com/nadili-401-advanced-javascript/lab-06)

### Modules
#### `model.js`
#### `people.js`
#### `teams.js` 


### Setup
#### Running the app
* npm start
* json-server --watch ./data/db.json
* http://localhost:3000

### In TERMINAL
* `node index.js [name of the person or team]` 
    * * `node index.js` <= Prints Number of Teams and Number of People
    * * `node index.js Nadya Ilinskaya` <= Prints data related to that person
    * * `node index.js Yellow Rhino` <= Prints team name, color and all the people on that team


  
#### Tests
* Unit Tests: 'npm test'
* Lint Tests: 'npm run lint' 

(!!!NOTE!!! - async files are included in eslintignore as linter does not recognize async-await syntaxes:
model.js
model.test.js 
)



#### UML
![ UML for the 'callbacks' part of the application ](/assets/lab-06-uml.jpg)