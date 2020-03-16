import moment from 'moment';

export const getIndexFirstCharacter = character => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return alphabet.indexOf(character.toLowerCase()) + 1;
};

export const checkContainValue = (array, value) =>
  array.find(
    item => parseInt(moment(item.date).format('DD')) === parseInt(value)
  )
    ? true
    : false;
