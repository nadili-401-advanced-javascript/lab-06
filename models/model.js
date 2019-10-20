'use strict';

const validate = require('jsonschema').validate;
const fetch = require('node-fetch');

class Model {
  constructor(schema, url) {
    this.schema = schema;
    this.url = 'http://localhost:3000/' + url;
  }

  async get() {
    // HTTP method to get   
    let path = this.url;
    console.log('path:', path);

    let res = await fetch(path, { method: 'GET' });
    let json = await res.json();

    if (res.ok) return json;
    else return res.statusText;
  }

  async getFromField(query) {
    let path=this.url+'?';
    for (let key in query){
      path += key+'='+query[key]+'&';
    }
   console.log('path:', path);
   let res = await fetch(path, { method: 'GET' });
    let json = await res.json();
    if (res.ok) return json;
    else return res.statusText;    
  }

  async create(record) {
    if (sanitize (record)){
        let res = await fetch(this.url, {
          method: 'POST',
          body: JSON.stringify(record),
          headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
          let json = await res.json();
          console.log('Data:', json);
        } else console.log(res.statusText);
      }else { 
        console.log('wrong format!');
      } 
  }

  
   async update (id, record) {
    let path = this.url + '/' + id;
    if (sanitize (record)) {
      let res = await fetch(path, {
        method: 'PUT',
        body: JSON.stringify(record),
        headers: { 'Content-Type': 'application/json' },
      });

      if(res.ok) {
        let json = await res.json();
        return json;
      } else {
        console.log(res.statusText);
      }
    }
  }

  async delete (id) {
    let path = this.url + '/' + id;
    let res = await fetch(path, {
      method: 'DELETE',
    });

    if(res.ok) {
      console.log(`Deleted!`);
    } else {
      console.log(res.statusText);
    }
  }

    async count () {
      let path = this.url;
  
      let res = await fetch(path, { method: 'GET'});
      let json = await res.json();
      if(res.ok) {
        return json.length;
      }
    }
      
    sanitize (record) {
      return validate(record, this.schema);
    }
}

module.exports = Model;
