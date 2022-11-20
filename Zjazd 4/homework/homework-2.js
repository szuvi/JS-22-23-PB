// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require('node-fetch');

function getCharactersFromEpisode(episodeNumber) {
  // your code here
}

getCharactersFromEpisode(7).then((characters) =>
  characters.forEach((character) => console.log(character.name))
);
