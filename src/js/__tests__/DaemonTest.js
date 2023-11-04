import Daemon from '../Daemon';

test('test class Daemon', () => {
  const result = new Daemon('Heroes');
  console.log(result);

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
