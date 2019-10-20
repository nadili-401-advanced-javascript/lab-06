// const Model = require('../models/model.js');
// const Teams = require('../models/teams.js');
const People = require('../models/people.js');


jest.mock('node-fetch');

let people = new People();

describe('Model', () => {

  it('can create', () => {
    expect(true).toBeDefined();
  });

  it('can create team', async () => {
    let test = await team.create({
      id: 6,
      name: 'Yellow tiger',
      color: 'yellow'
    });
    console.log(test);
  });
  
});


