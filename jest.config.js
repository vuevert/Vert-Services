module.exports = {
  "testMatch": [
    "**/*.(spec|test).(js|ts)?(x)"
  ],
  "moduleFileExtensions": [
    "ts",
    "js",
    "json"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/.jest/file-mock.js",
    "\\.(css|less)$": "<rootDir>/.jest/style-mock.js",
    "../src": "<rootDir>/lib/index.js"
  },
  "setupFiles": [
    "<rootDir>/.jest/setup.js"
  ],
  "coverageDirectory": "<rootDir>/.coverage-report",
  "collectCoverageFrom": [
    "lib/**/*.js",
    "!**/*.d.ts",
    "!**/node_modules/**"
  ]
}
