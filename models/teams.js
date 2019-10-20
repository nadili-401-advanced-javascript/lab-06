'use strict';

const Model = require('./model.js');

const schema = {
  name: { type: String, required: true },
  color: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['red', 'blue', 'yellow', 'purple'],
  },
};

class Teams extends Model {
  constructor() {
    super(schema, 'teams');
  }
}

module.exports = Teams;
