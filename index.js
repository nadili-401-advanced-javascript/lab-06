'use strict';

const People = require('./models/people.js');

const people = new People();

people.create({
  firstName: 'Sarah',
  lastName: 'Smalls',
  pets: [{ name: 'Rex' }, { name: 'Tbone' }]
});
