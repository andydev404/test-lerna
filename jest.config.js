module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testMatch: ['<rootDir>/components/**/__tests__/**/*.test.(j|t)s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/src/**/*.(j|t)s?(x)'],
  coverageReporters: ['lcov', 'text', 'cobertura'],
  modulePaths: ['/'],
};
