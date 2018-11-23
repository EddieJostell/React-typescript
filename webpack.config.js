var path = require("path");
var config = {
    mode: "production",
    entry: ["./app.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    devServer: {
        
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;