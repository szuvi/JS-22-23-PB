// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api';
const episodePath = '/episode';

async function getCharactersFromEpisode(episodeNumber) {
  const { characters: charactersUrls } = await fetchWithError(
    `${URL}${episodePath}/${episodeNumber}`
  );
  const characterPromises = charactersUrls.map((url) => fetchWithError(url));
  const characters = await Promise.all(characterPromises);
  return characters;
}

async function fetchWithError(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Server responded with ${response.status}`);
  }
  return response.json();
}

// ===============================================
(async function IIFE() {
  try {
    const characters = await getCharactersFromEpisode(7);
    characters.forEach((character) => console.log(character.name));
  } catch (error) {
    console.log(error);
  }
})();
