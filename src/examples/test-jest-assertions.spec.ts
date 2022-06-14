/**
 * Exemplos de testes de asserssões e maneira de implementar.
 */
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

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const b = true;
    const number = 10;

    expect(b).toBe(true);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });

  it('splited test', () => {
    const number = 10;
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.004, 2);
    expect(number).toBeCloseTo(9.996, 2);

    expect(number).not.toBeNull();
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Wesley', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 30);
    expect(person).not.toHaveProperty('lastName');

    expect(person.name).toBe('Wesley');
  });
});

export {};
