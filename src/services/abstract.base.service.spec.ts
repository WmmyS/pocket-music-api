it('should return true if number is one', () => {
  const number = 1;
  expect(number).toBe(1);
});

it('should return true if string is not wesley', () => {
  const nome = '!wesley';
  expect(nome).not.toBe('wesley');
});

//Agrupando testes
describe('Testing another test', () => {
  test('should return true', () => {
    const validate = true;
    expect(validate).toBe(true);
  });
});

export {};
