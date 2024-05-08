
/* const { getUUID } = require('../plugin/get_id_plugin');
const {getAge} = require('../plugin/get_age_plugin'); */

const {getAge, getUUID} = require('../plugin');


const buildPerson = ( { name, birthdate } ) => {

    return {
       id: getUUID(),
       name,
       birthdate,
       age: getAge(birthdate),     
    }
}

const obj = { name: 'John', birthdate: '1985-10-21' }

const john = buildPerson(obj);


console.log(john);