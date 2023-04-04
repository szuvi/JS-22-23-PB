class MorseTranslator {
  #dictionaryTo;
  #dictionaryFrom;

  constructor(dictionaryTo, dictionaryFrom) {
    this.#dictionaryTo = dictionaryTo;
    this.#dictionaryFrom = dictionaryFrom;
  }

  get #letterSpace() {
    return '   ';
  }

  get #wordSpace() {
    return '       ';
  }

  translateTo(text) {
    if (typeof text !== 'string') {
      throw new Error('Input must be of type string!');
    }
    text = text.toUpperCase();
    const characters = text.split('');
    const translatedCharacters = characters.map((char) =>
      this.#translateCharacterTo(char)
    );
    return translatedCharacters.join(this.#letterSpace);
  }

  #translateCharacterTo(char) {
    if (char === ' ') {
      return char; // Leaving space since we will join it with this.#letterSpace on both sides = 7 spaces total
    }
    const translatedChar = this.#dictionaryTo[char];
    return translatedChar ?? ''; // Ommit undefineds
  }

  translateFrom(text) {
    if (typeof text !== 'string' && !MorseTranslator.includesOnlyMorse(text)) {
      throw new Error('Input must be of type string and be in morse code!');
    }
    const words = text.split(this.#wordSpace);
    const translatedWords = words.map((word) => this.#translateWordFrom(word));
    const result = translatedWords.join(' ');
    if (this.#includesMorseAfterTransaltion(result)) {
      throw new Error('Invalid morse code input!');
    }
    return result;
  }

  #translateWordFrom(word) {
    const characters = word.split(this.#letterSpace);
    const translated = characters.map(
      (character) => this.#dictionaryFrom[character] ?? character
    );
    return translated.join('');
  }

  #includesMorseAfterTransaltion(input) {
    // if . or - are left in the input after translation the original morse code input was incorrect
    return input.search(/[.-]/gi) !== -1;
  }

  static includesOnlyMorse(input) {
    if (input.search(/[^.-\s]/gi) !== -1) {
      // matches all but . - spacebar
      return false;
    }
    return true;
  }
}

export default MorseTranslator;
