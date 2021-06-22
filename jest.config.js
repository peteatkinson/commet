module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__/coverage'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.test.{ts,tsx,js,jsx}',
    '!src/**/*.test.d.ts',
    'src/'
  ],
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/__tests__/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
};
