 # 1. Amar assesment given by  MAPUP 
This project is a collection of utility functions for converting fuel units, currencies, and fuel economy metrics

## 2. Usage
### Fuel Unit Conversion ::
The fuelUnitConversion function can convert fuel units between liters and gallons:

const { fuelUnitConversion } = require('amar-utils');

// convert 14 liters to gallons
const result = fuelUnitConversion('liter', 'gallon', 14);
console.log(result); // { fuelUnit: 'gallon', convertedValue: 3.698408 }

### 3. Currency Conversion
The currencyConversion function can convert between various currencies:

const { currencyConversion } = require('amar-utils');

// convert 1 USD to INR
const result = currencyConversion(1, 'USD', 'INR');
console.log(result); // { currencyUnit: 'INR', convertedValue: 74.162012 }

### 4. Convert to US MPG
The convertToUSMpg function can convert fuel economy metrics to US miles per gallon:

const { convertToUSMpg } = require('amar-utils');

// convert 12 kmpl to mpg
const result = convertToUSMpg({ city: 12, hwy: 8, units: 'kmpl' }, 'USA');
console.log(result); // { city: 28.225695833076, hwy: 18.817163888717335, units: 'mpg' }

### 5. Testing
This project includes unit tests to ensure the functions are working correctly. To run the tests, use the following command:

npm test

### 6. Contributing :thumbsup:
If you would like to contribute to this project, please submit a pull request with your changes. Make sure to include unit tests for any new or modified functions.

### 
