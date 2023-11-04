import Character from '../BaseClass';
import Bowman from '../Bowman';

test('test class Character', () => {
  const result = new Character('Heroes', 'Bowman');

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('should throw an error if name is not a string or its length is less than 2 or greater than 10', () => {
  expect(() => new Character(123, 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('Lorem ipsum dolor sit amet', 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Incorrect character type', () => {
  expect(() => new Character('Heroes', 'Swordsman2')).toThrow('Некорректный тип персонажа');
});

test('cannot increase the level of a deceased person', () => {
  expect(() => {
    const result = new Character('Heroes', 'Swordsman');
    result.health = 0;
    result.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});

test('level up', () => {
  const result = new Bowman('Hero1');

  result.levelUp();

  console.log('result', result);

  expect(result).toEqual({
    name: 'Hero1',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('damage', () => {
  const result = new Bowman('Hero1');

  result.damage(50);

  console.log('result', result);

  expect(result).toEqual({
    name: 'Hero1',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('damage for health < 0', () => {
  expect(() => {
    const result = new Bowman('Hero1');
    result.health = -1;
    result.damage(100);
  }).toThrow('он и так мертв');
});
