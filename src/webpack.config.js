const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        filename: "[name].[chunkhash:8].js"
    }
}
