import MorseTranslator from './MorseTranslator.js';
import AugumentedObject from './AugumentedObject.js';
import morseToEnglish from './EnglishMorse.js';

const englishToMorse = AugumentedObject.reverseKeysValues(morseToEnglish);

const translator = new MorseTranslator(englishToMorse, morseToEnglish);

const test = 'SOS aBc';

const inMorse = translator.translateTo(test);
console.log(inMorse);

const retranslated = translator.translateFrom(inMorse);
console.log(retranslated);
