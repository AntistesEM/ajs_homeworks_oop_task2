import Magician from '../Magician';

test('test class Magician', () => {
  const result = new Magician('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
