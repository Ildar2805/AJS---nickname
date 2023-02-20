import Validator from '../js/nickname';

test('Имя соответствует всем правилам', () => {
  const userName = 'Iva4n56ov';
  const user = new Validator(userName);
  const result = user.validateUsername();
  expect(result).toBe(true);
});

test('Имя содержит недопустимые символы', () => {
  const userName = 'Ива34нов@';
  const user = new Validator(userName);
  const result = user.validateUsername();
  expect(result).toBe(false);
});

test('Имя содержит подряд более трёх цифр', () => {
  const userName = 'Ива3456нов@';
  const user = new Validator(userName);
  const result = user.validateUsername();
  expect(result).toBe(false);
});

test('Имя начинается с цифры', () => {
  const userName = '3Ива34нов@';
  const user = new Validator(userName);
  const result = user.validateUsername();
  expect(result).toBe(false);
});
