const findTheOldest = function(arr) {
    const ages = arr.map((person) => {
     return {
            name: person.name,
            age: person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
    }});

    ages.sort((a, b) => b.age - a.age);
    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
