const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        test: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),

        // 可以打包后返回的module.exports 可以被定义的名字接收
        library: '_dll_[name]'
    },
    plugins: [
        // 生成一个任务清单manifest.json
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}