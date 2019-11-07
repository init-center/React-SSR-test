module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }]
    }
}