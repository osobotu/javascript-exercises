const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    let personAge = getAge(person);
    let oldestAge = getAge(oldest);
    if (personAge > oldestAge) {
      oldest = person;
    }
    return oldest;
  });
};

const getAge = function (person) {
  if (!person.yearOfDeath) {
    const d = new Date();
    return d.getFullYear() - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
