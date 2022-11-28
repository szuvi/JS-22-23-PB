// Create an IIFE that returns an object with fields:
// method setValue(),
// method showValue()
// and method reverseValue().
// Calling showValue should log the value, or if there is no value
// - tell us about that.
// Calling setValue will set given number or string in closure,
// if the argument is other type - throw an error.
// Value can be type string or number.
// reverseValue(): If number do (*(-1)), if string reverse it.  Closure pattern.

const myObject = (() => {
  let value;
  
  function setValue(newValue) {
    if (typeof newValue !== 'number' && typeof newValue !== 'string') {
      throw new Error('Incorrect input for setValue');
    }
    value = newValue;
  }

  function showValue() {
    if (!value) {
      throw new Error('No value has been set yet');
    }
    console.log(value);
  }

  function reverseValue() {
    if (!value) {
      throw new Error('No value has been set yet');
    }
    if (typeof value === 'number') {
      value = -value;
    }
    if (typeof value === 'string') {
      value = value.split('').reverse().join('');
    }
  }
  return {
    setValue,
    showValue,
    reverseValue,
  };
})(); 

myObject.setValue(5);
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
myObject.setValue('hello');
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
