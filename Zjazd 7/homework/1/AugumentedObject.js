class AugumentedObject {
  static isObject(input) {
    if (typeof input === 'object' && input !== null) {
      return true;
    }
    return false;
  }

  static reverseKeysValues(input) {
    if (!AugumentedObject.isObject(input)) {
      throw new Error('Input is not a valid object!');
    }

    return Object.entries(input).reduce((result, [key, value]) => {
      result[value] = key;
      return result;
    }, {});
  }
}

export default AugumentedObject;
