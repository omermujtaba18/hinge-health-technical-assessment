// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.test.ts$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
