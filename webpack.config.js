const path = require('path'); 

module.exports = {
    entry: "./src/playground/redux-expense.js",
    output: {
        path: path.resolve(__dirname, 'public'),
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
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
};

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