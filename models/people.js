'use strict';

const Model = require('./model.js');

const schema = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  _team: { type: String, required: false },
  birthday: { type: Date, required: true },
  likes: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['cats', 'dogs', 'none', 'both']
  }
};

class People extends Model {
  constructor() {
    super(schema, 'people');
  }
}

module.exports = People;
