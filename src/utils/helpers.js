export const getIndexFirstCharacter = character => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return alphabet.indexOf(character.toLowerCase()) + 1;
};
