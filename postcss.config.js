let plugins = [
    require("postcss-import"),
    require("autoprefixer")
];

// Compress files only in production environments
if (process.env.NODE_ENV == "production")
plugins.push(
    require("cssnano")({
    preset: "default"
    })
);

module.exports = {
plugins
};