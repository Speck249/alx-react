export default function accessImmutableObject(object, array) {
  let currentValue = object;

  for (const key of array) {
    if (currentValue === undefined || typeof currentValue !== 'object') {
      return undefined;
    }

    if (currentValue instanceof Map) {
      currentValue = currentValue.get(key);
    } else {
      currentValue = currentValue[key];
    }
  }

  return currentValue;
}
