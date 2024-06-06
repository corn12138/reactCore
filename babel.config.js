// babel.config.js
module.exports = {
    presets: [
      "@babel/preset-env", // Transpile modern JS to compatible JS
      "@babel/preset-react", // For JSX
      "@babel/preset-typescript" // For TypeScript
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods", // Needed for private methods
      "@babel/plugin-syntax-dynamic-import" // If dynamic imports are used
    ]
  };
  