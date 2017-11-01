const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = [
    // Client:
    {
        entry: './src/client/index.js',
        output: {
            filename: './public/bundle.js'
        },
        resolve: {
            modules: ['node_modules', './src/client'],
            extensions: ['.js', '.json', '.jsx'],
            alias: {
                // Lets me import settings from anywhere
                settings: path.resolve(__dirname, './settings.js')
            }
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                }
            ]
        }
    },
    // Server:
    {
        entry: './src/server/app.js',
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        output: {
            filename: './dist/server.js'
        },
        resolve: {
            modules: ['./src/server'],
            alias: {
                // Lets me import settings from anywhere
                settings: path.resolve(__dirname, './settings.js')
            }
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2']
                    }
                }

            ]
        }
    }
]
