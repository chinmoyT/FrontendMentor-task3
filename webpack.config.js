const path = require("path");
module.exports = {
    entry: "./src/index.js", // Entry point of your application
    output: {
        filename: "bundle.js", // Output bundle file name
        path: path.resolve(__dirname, "dist"), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
              },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    }
                ],
            },
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devServer: {
            contentBase: path.join(__dirname, "public"), // Serve files from this directory
            port: 3000, // Port for the development server
            open: true, // Open the default web browser when the server starts
        },
    }
};