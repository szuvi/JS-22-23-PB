const films = require('./sw-films.json');
const planets = require('./sw-planets.json');
const people = require('./sw-people.json');
const starships = require('./sw-starships.json');

// count sum of all starships cost from episodes 4-6
console.log(
  'Sum of all starships cost from episodes 4 - 6 is: ' +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  const starshipUrls = films
    .filter(getFilterByEpisode(startEp, endEp))
    .map(mapStarshipUrls)
    .flat();
  const filteredStarships = starships.filter(filterShipsByUrlArr(starshipUrls));
  return filteredStarships.reduce(reduceByCost, 0);
}

function getFilterByEpisode(startEp, endEp) {
  return (film) => film.episode_id >= startEp && film.episode_id <= endEp;
}

function mapStarshipUrls(film) {
  return film.starships;
}

function filterShipsByUrlArr(urlArray) {
  return (starship) =>
    urlArray.includes(starship.url) && starship.cost_in_credits !== 'unknown';
}

function reduceByCost(sum, starship) {
  sum += +starship.cost_in_credits;
  return sum;
}

// find the fastest starship you can afford having 8500000 credits

console.log(
  'Fastest ship I can get for up to 8500000 is: ' +
    getFastestShipFor(8500000).name
);

function getFastestShipFor(money) {
  const filteredSortedShips = starships
    .filter(
      (starship) =>
        starship.cost_in_credits !== 'unknown' &&
        +starship.cost_in_credits <= money &&
        !isNaN(starship.max_atmosphering_speed.replace('km'))
    )
    .sort((a, b) => +b.max_atmosphering_speed - +a.max_atmosphering_speed);
  return filteredSortedShips[0];
}

// find planet name with the lowest difference between the rotation period and orbital period

console.log(
  'Planet name with the lowest difference between the rotation period and orbital period is: ' +
    getPlanetNameWithLowestDifference('rotation_period', 'orbital_period')
);

function getPlanetNameWithLowestDifference(key1, key2) {
  const nameKeyObjects = planets
    .map(getNameKeyMapper(key1, key2))
    .filter(getGarbageFilter(key1, key2))
    .map(getDifferenceMapper(key1, key2))
    .sort(sortByDifference);

  return nameKeyObjects[0].name;
}

function getNameKeyMapper(key1, key2) {
  return (planet) => {
    return {
      name: planet.name,
      [key1]: planet[key1],
      [key2]: planet[key2],
    };
  };
}

function getGarbageFilter(key1, key2) {
  return (nameKeyObj) =>
    nameKeyObj[key1] !== 'unknown' &&
    nameKeyObj[key1] !== '0' &&
    nameKeyObj[key2] !== 'unknown' &&
    nameKeyObj[key2] !== '0';
}

function getDifferenceMapper(key1, key2) {
  return (nameKeyObj) => {
    nameKeyObj.keysDifference = +nameKeyObj[key2] - +nameKeyObj[key1];
    return nameKeyObj;
  };
}

function sortByDifference(a, b) {
  return a.keysDifference - b.keysDifference;
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  'Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: ' +
    getCrewShipFrom(4, new Date(2014, 11, 10), new Date(2014, 11, 12)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  const dateStartMs = new Date(dateStart).getTime();
  const dateEndMs = new Date(dateEnd).getTime();
  return starships
    .filter(getShipsFilterByCrew(maxCrew))
    .filter(getShipsFilterByCreation(dateStartMs, dateEndMs));
}

function getShipsFilterByCrew(maxCrew) {
  return (starship) => starship.crew !== 'unknown' && +starship.crew <= maxCrew;
}

function getShipsFilterByCreation(dateStartMs, dateEndMs) {
  return (starship) => {
    const createdInMs = new Date(starship.created).getTime();
    return createdInMs >= dateStartMs && createdInMs <= dateEndMs;
  };
}

// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

console.log(
  'People from ep 1 - 5 sorted by origin planet diameter low to high: ' +
    JSON.stringify(getPeopleSortedByOriginPlanetDiameter(1, 5), null, 3)
);
function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  return films
    .filter(getFilterByEpisode(startEp, endEp))
    .map(mapUrlsOfPeople)
    .flat()
    .map(mapPeopleByUrls)
    .map(addPlanetToPerson)
    .sort(sortByDiameterOfPlanet);
}

function mapUrlsOfPeople(film) {
  return film.characters;
}

function mapPeopleByUrls(url) {
  return people.find((person) => person.url === url);
}

function addPlanetToPerson(person) {
  person.origin_planet = planets.find(
    (planet) => planet.url === person.homeworld
  );
  return person;
}

function sortByDiameterOfPlanet(a, b) {
  let diameterA = a.origin_planet.diameter;
  let diameterB = b.origin_planet.diameter;
  diameterA = diameterA === 'unknown' ? Infinity : diameterA;
  diameterB = diameterB === 'unknown' ? Infinity : diameterB;
  // Ternary operator, read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  return diameterA - diameterB;
}
