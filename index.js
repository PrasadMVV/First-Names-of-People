const peopleNames = require("../country/state/city/index");
const getFirst = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return getFirst(peopleNames);
};
module.exports = getPeopleInCity;
