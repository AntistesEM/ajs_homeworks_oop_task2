import Undead from '../Undead';

test('test class Undead', () => {
  const result = new Undead('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
