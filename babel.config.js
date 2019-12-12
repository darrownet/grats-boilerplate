module.exports = function (api) {

    api.cache(true);

    const presets = [
        "@babel/preset-env",
        "@babel/preset-react"
    ];

    const plugins = [
        "react-hot-loader/babel",
        ["@babel/plugin-transform-modules-commonjs"],
        ["@babel/plugin-proposal-class-properties", { "loose": true}],
        [ "module-resolver", { "root": ["./src"]}]
    ];

    return {
        presets,
        plugins
    };

};