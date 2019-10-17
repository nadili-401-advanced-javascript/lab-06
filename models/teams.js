'use strict';

const Model = require('./model.js');

const schema = {
  name: { type: String, required: true },
  color: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['red', 'blue', 'yellow']
  }
};

class Teams extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Teams;
