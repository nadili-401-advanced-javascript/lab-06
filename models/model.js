'use strict';

const validate = require('jsonschema').validate;
const fetch = require('node-fetch');

class Model {
  constructor(schema, url) {
    this.schema = schema;
    this.url = 'http://localhost:3000/' + url;
  }

  async get(id) {
    // HTTP method to get
    // this.url + / + {id}
    let path = 'https://swapi.co/api/people/1';
    console.log('path:', path);

    let res = await fetch(path, { method: 'GET' });
    let json = await res.json();

    if (res.ok) console.log('Data:', json);
    else console.log(res.statusText);
  }

  getFromField(query) {}

  async create(record) {
    // technically we should sanitize()
    let res = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(record),
      headers: { 'Content-Type': 'application/json' }
    });

    // if url is good
    // return
    // res = { ok: true, statusText: '',  json => async() {
    // something > returns a object {}
    // }}

    if (res.ok) {
      let json = await res.json();
      console.log('Data:', json);
    } else console.log(res.statusText);

    // return a promise
  }

  update(_id, record) {}

  delete(_id) {}

  count(query) {}

  sanitize(record) {}
}

module.exports = Model;
