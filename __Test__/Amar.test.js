const { fuelUnitConversion, currencyConversion, convertToUSMpg } = require('../Amar');

describe(' fuelUnitConversion', () => {
  test('should convert liter to gallon', () => {
    expect(fuelUnitConversion('liter', 'gallon', 14)).toEqual({ fuelUnit: 'gallon', convertedValue: 3.698408 });
  });

  test('should convert gallon to liter', () => {
    expect(fuelUnitConversion('gallon', 'liter', 14)).toEqual({ fuelUnit: 'liter', convertedValue: 52.995740000000005  });
  });

  test('should convert liter to liter for default values', () => {
    expect(fuelUnitConversion('liter','litter',14)).toEqual({ fuelUnit: 'liter', convertedValue: 14 });
  });
});

describe('currencyConversion', () => {
  test('should convert USD to INR', () => {
    expect(currencyConversion(undefined, 10, 'USD', 'INR')).toEqual({ currencyUnit: 'INR', convertedValue: 741.62012 });
  });

  test('should convert INR to USD', () => {
    expect(currencyConversion(undefined, 741.62, 'INR', 'USD')).toEqual({ currencyUnit: 'USD', convertedValue: 10 });
  });

  test('should convert USD to USD', () => {
    expect(currencyConversion(undefined, 10, 'USD', 'USD')).toEqual({ currencyUnit: 'USD', convertedValue: 10 });
  });
});

describe('convertToUSMpg', () => {
  test('should convert kmpl to mpg for USA', () => {
    expect(convertToUSMpg({ city: 12, hwy: 8, units: 'kmpl' }, 'USA')).toEqual({ city: 28.2257, hwy: 18.817166664, units: 'mpg' });
  });

  test('should convert l100 to mpg for IND', () => {
    expect(convertToUSMpg({ city: 10, hwy: 12, units: 'l100' }, 'IND')).toEqual({ city: 23.5215, hwy: 19.60125, units: 'mpg' });
  });

  test('should convert mpg to mpg for USA', () => {
    expect(convertToUSMpg({ city: 20, hwy: 30, units: 'mpg' }, 'USA')).toEqual({ city: 20, hwy: 30, units: 'mpg' });
  });
})