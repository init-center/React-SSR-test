const path = require('path')

module.exports = {
    entry: {
        client: './src/client/client.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/public/js')
    },
}