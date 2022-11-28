// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api';
const episodePath = '/episode';

function getCharactersFromEpisode(episodeNumber) {
  return getEpisode(episodeNumber)
    .then(mapCharacterUrls)
    .then(mapUrlsToPromises)
    .then((promises) => Promise.all(promises));
}

function getEpisode(episodeNumber) {
  return fetch(`${URL}${episodePath}/${episodeNumber}`).then(convertToJSON);
}

function convertToJSON(response) {
  if (!response.ok) {
    throw new Error(`Server responded with ${response.status}`);
  }
  return response.json();
}

function mapCharacterUrls(episode) {
  return episode.characters;
}

function mapUrlsToPromises(urls) {
  const promises = urls.map((url) => fetch(url).then(convertToJSON));
  return promises;
}

// ===============================================

getCharactersFromEpisode(7).then((characters) =>
  characters.forEach((character) => console.log(character.name))
);
