// const Model = require('../models/model.js');
const Teams = require('../models/teams.js');
const People = require('../models/people.js');


jest.mock('node-fetch');

let team = new People();

describe('Model', () => {

  it('can create', () => {
    expect(true).toBeDefined();
  });
});


