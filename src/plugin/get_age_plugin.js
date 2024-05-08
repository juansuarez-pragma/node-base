const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) return new Error('BirthDate es required');

    return getAgePlugin(birthdate);
}

module.exports = {
    getAge,
}