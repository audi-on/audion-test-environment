// eslint-disable-next-line no-undef
module.exports = {
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/**/*.test.(ts|js)'],
    testEnvironment: 'node',
    modulePaths: ['<rootDir>'],
};
