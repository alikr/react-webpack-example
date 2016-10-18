var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude:path.resolve(__dirname, 'node_modules/'),
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          title : "vuex-tutorial",
          name: 'html',
          template: path.join(__dirname,'/index.html'),
          filename:path.join(__dirname,'dist/index.html'),
          excludeChunks: ['comps'],
          inject: true
        })
    ]
}
