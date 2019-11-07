const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: {
        server: './src/server/server.tsx'
    },
    externals: [nodeExternals()]
}