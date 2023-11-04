import Bowman from '../Bowman';

test('test class Bowman', () => {
  const result = new Bowman('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
