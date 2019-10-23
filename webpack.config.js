const path = require('path');
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}


module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new MiniCSSExtractPlugin({ filename: 'styles.css'})

    return {
        entry: "./src/app.js",
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    }, {
                        loader: 'css-loader',
                        options: {
                                sourceMap: true
                            }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}

// loader for babel helps webpack use babel to transpile JSX into javascript
/*
    This is in the yarn add babel-core  (babel-core is used by webpack)
    babel-loader is a webpack plugin that teaches webpack to run babel when encountering specific files
    These are specified in the module object
    .js$ makes sure the file loaded ends in .js
    exclude: we want to exclude the node_modules. We do not want babel to run through those
    Summary: every time we see a .js file it needs to run through babel.
    To tell webpack we need to set this up create a separate config file for babel. Call is .babelrc
*/

/* We want to server up index.html and let React Router render the screen. We need to tell dev server what to do when getting 404
this is where historyApiFallback comes in play. Says we are going to be handling routing via our CLIENT side code. */