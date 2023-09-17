const findTheOldest = function(arr) {
    // const ages = arr.map((person) => {
    //  return {
    //         name: person.name,
    //         age: person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
    // }});

    // ages.sort((a, b) => b.age - a.age);
    // return ages[0];

    return arr.reduce((obj, person) => {
        const age = person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth);
        
        if (age > obj.age) {
            obj.age = age;
            obj.name = person.name;
        }
        return obj;
    }, {age: 0, name: ''});
};

// Do not edit below this line
module.exports = findTheOldest;
