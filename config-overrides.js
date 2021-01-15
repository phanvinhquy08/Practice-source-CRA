const { override, addBabelPlugins, addBabelPreset } = require("customize-cra");

module.exports = override(
    addBabelPlugins(
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-syntax-optional-chaining",
        "@babel/plugin-transform-typescript"
    ),
    addBabelPreset("@babel/preset-typescript")
);
