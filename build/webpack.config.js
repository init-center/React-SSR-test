const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')

module.exports = (env) => {
    let config = env && env.server ? serverConfig : clientConfig
    return merge(baseConfig, config)
}