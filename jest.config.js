module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  preset: "@shelf/jest-mongodb",
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    ".+\\.ts$": "ts-jest"
  },
};
