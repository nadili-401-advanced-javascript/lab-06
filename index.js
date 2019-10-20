'use strict';

const People = require('./models/people.js');
const Teams = require('./models/teams.js');

let people = new People();
let teams = new Teams();
  
const find = async (s1, s2) => {
  let foundPerson = await people.getFromField({firstName:s1, lastName:s2});
  let foundTeam =  await teams.getFromField({
    name: s1 + ' ' + s2
  })
  if (foundPerson.length > 0) {
    await printPerson(foundPerson[0]);
  } else if (foundTeam.length > 0){
    await printTeam(foundTeam[0]);
  } else {
    console.log ('No record found');
  }
  console.log(foundPerson);
  console.log(foundTeam);
}

const printPerson = async (person)=> {

  console.log('Name: ', person.firstName, person.lastName);
  let team = {};
  if(person.team){
   team = await teams.get(person.team);
  }
  if(team.name) {
    console.log('Team: ', team.name);
  }
  
  console.log('Birthday: ', person.birthday);
  console.log ('Likes: ', person.likes);

}
const printTeam = async (team)=> {
  console.log('Team Name: ', team.name);
  console.log('Color: ', team.color);
  console.log('Members: ');

  let members = await people.getFromField({team: team.id});

  if(members)
    members.forEach(el => {
      console.log('-', el.firstName, el.lastName);
    });
  else console.log(' empty team ')
}

const makePerson = async (person) => {
  let people = new People();
  let made = await people.create(person);
  console.log(made);
  return made;
}

const makeTeam = async (team) => {
  let newteam = new Teams();
  let made = await newteam.create(team);
  console.log(made);
  return made;
}

const findPerson = async (person) => {
  let found = await people.getByQuery(person);
  if (found === {}){
    return 'No record found';
  } else {
  return found;
  }
}
const findTeam = async (team) => {
  let found = await team.getByQuery(team);
  if (found === {}){
    return 'No record found';
  } else {
  return found;
  }
}

const printCounts = async () => {
  let teamCount = await teams.count();
  let peopleCount = await people.count();

  console.log('Teams: ', teamCount);
  console.log('People: ', peopleCount);
}

let args = process.argv;
if (args.length == 4){
  find(args[2], args[3]);
} else {
  printCounts();
}
