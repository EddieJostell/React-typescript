const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;
var path = require("path");
var config = {
    mode: "production",
    entry: ["@babel/polyfill","./app.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "json", "wasm"]
    },

    devServer: {
        
        port: 3000,
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: env == "development" ? "style-loader" : MiniCssExtractPlugin.loader, options: { sourceMap: true, filename: "main.css" } },
                    { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
                    { loader: "postcss-loader", options: { sourceMap: true, config: { path: __dirname + "/postcss.config.js" } } },
                    { loader: "less-loader", options: { sourceMap: true } }
                ],
            },
        ]
    }
};

module.exports = config;