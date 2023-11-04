import Zombie from '../Zombie';

test('test class Zombie', () => {
  const result = new Zombie('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
