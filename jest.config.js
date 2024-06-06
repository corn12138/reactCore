// jest.config.js
module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
      "node_modules/(?!(axios)/)" // Include axios or any other package causing issues
    ]
  };
  