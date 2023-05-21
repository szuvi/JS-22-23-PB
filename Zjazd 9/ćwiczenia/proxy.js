const rectangle = { height: 20, width: 40 };

const rectProxyHandler = {
  get(object, key) {
    if (key === 'area') {
      return object.height * object.width;
    }

    if (key === 'perimeter') {
      return 2 * object.height + 2 * object.width;
    }

    return object[key];
  },

  set(object, key, value) {
    if (key === 'area' || key === 'perimeter') {
      return false;
    }
    object[key] = value;
    return true;
  },
};

const rectProxy = new Proxy(rectangle, rectProxyHandler);

console.log('Area:', rectProxy.area);
console.log('Perimeter:', rectProxy.perimeter);

rectProxy.width = 10;
console.log('New Area:', rectProxy.area);
console.log('New Perimeter:', rectProxy.perimeter);

rectProxy.area = 100;
console.log('Area should remain the same:', rectProxy.area);
