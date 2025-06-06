## Iniciar npm 

npm init -y 

## Jest

npm install --save-dev jest

  "scripts": {
    "test": "jest"
  },

## Instalar scripts y dependencias

"scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:watchAll": "jest --watchAll",
    "test:list": "jest --listTests",
    "test:json": "jest --json"
  }

## Babel 

npm install --save-dev babel-jest @babel/core @babel/preset-env

## Jest Extended

npm install --save-dev jest-extended

  "jest": {
    "setupFilesAfterEnv": ["jest-extended/all"]
  }

## Instalar axios

npm i axios
