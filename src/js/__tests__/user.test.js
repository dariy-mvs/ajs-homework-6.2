import checkNumber from '../app';

test('check russian number', () => {
  const number = checkNumber('8 (927) 000-00-00');
  expect(number).toBe('+79270000000');
});

test('check russian number', () => {
  const number = checkNumber('+7 960 000 00 00');
  expect(number).toBe('+79600000000');
});

test('check china number', () => {
  const number = checkNumber('+86 000 000 0000');
  expect(number).toBe('+860000000000');
});

test('check error number', () => {
  expect(() => {
    const number = checkNumber('+86 000');
    return number;
  }).toThrow('проверьте корректность номера');
});
