module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,  // 收集测试覆盖率信息
  collectCoverageFrom: ["{lib,utils}/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  reporters: ["default"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'utils'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/test/__mocks__/fileMock.js",
    ".*\\.(css|less|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    // https://stackoverflow.com/questions/42629925/testing-with-jest-and-webpack-aliases
    "^utils(.*)$": "<rootDir>/utils$1",
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],
}
