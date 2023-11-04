import Swordsman from '../Swordsman';

test('test class Swordsman', () => {
  const result = new Swordsman('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
