'use strict';

const validate = require('jsonschema').validate;

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {}

  getFromField(query) {}

  create(record) {}

  update(_id, record) {}

  delete(_id) {}

  count(query) {}

  sanitize(record) {}
}

module.exports = Model;
