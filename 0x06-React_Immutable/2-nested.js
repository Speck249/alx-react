import { fromJS, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return getIn(immutableObject, array);
}
