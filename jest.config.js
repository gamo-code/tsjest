module.exports = {
    transform: {"^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }]},
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };