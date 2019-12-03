module.exports = {
  rootDir: "../../",
  coverageDirectory: "<rootDir>/tests/__coverage__/",
  collectCoverageFrom: [
    "src/client/components/**/*.{js,jsx,ts,tsx}",
    "src/client/core/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/config/"
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'config/typescript/tsconfig-base.json'
    }
  },
  setupFiles: [
    "<rootDir>/tests/__mocks__/shim.js"
  ],
  roots: [
    "<rootDir>/src/client/components",
    "<rootDir>/src/client/core",
    "<rootDir>/tests/"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/config/enzyme/setupEnzyme.ts"],
};

