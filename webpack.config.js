var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [
    new webpack.optimize.CommonsChunkPlugin(
        {
            name: ['zepto'],   // 将公共模块提取
            filename: 'common.js',
            minChunks: Infinity // 提取所有entry公用依赖的模块
        }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: 'zepto',
        zepto: 'zepto',
        'window.zepto': 'zepto',
        'window.$': 'zepto'
    }),
    new webpack.IgnorePlugin(/src\/libs\/*/),
    new ExtractTextPlugin('[name].[contenthash:9].css')
];
module.exports = {
    cache: true,
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    // 页面入口文件配置
    entry: {
        whd: 'webpack/hot/dev-server',
        client: 'webpack-dev-server/client?http://localhost:8080',
        'login': './src/js/login.js',
        'index': './src/js/index.js',
        'register': './src/js/register.js',
        'find-password1': './src/js/find-password1.js',
        'coupons':'./src/js/coupons.js',
        'personal-center':'./src/js/personal-center.js',
        'shopping-cart':'./src/js/shopping-cart.js',
        'exchange-shopping':'./src/js/exchange-shopping.js',
        'edit-address':'./src/js/edit-address.js',
        'exchange':'./src/js/exchange.js',
        'finished-order-detail':'./src/js/finished-order-detail.js',
        'recipient-address':'./src/js/recipient-address.js',
        'save-address':'./src/js/save-address.js',
        'share':'./src/js/share.js',
        'shopping-detail':'./src/js/shopping-detail.js',
        'shopping-order':'./src/js/shopping-order.js',
        'shopping-list':'./src/js/shopping-list.js',
        'guessing':'./src/js/guessing.js',
        'register-pwd':'./src/js/register-pwd.js',
        'vip':'./src/js/vip.js',
        'select-address':'./src/js/select-address.js'
},
    // 插件项
    plugins: plugins,
    // 入口文件输出配置
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js',
        publicPath: './js/'
        // publicPath: '/static/js/'
    },
    module: {
        // 加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style!css-loader'},
            {test: /\.js$/, loader: 'babel?presets[]=es2015'},
            {test: /\.less$/, loader: 'style!css!less?sourceMap'},
            {test: /\.(gif|png|jpg|jpeg)$/, loader: 'url?limit=8192&name=images/[name].[ext]'},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url'}
        ]
    },
    // 其他解决方案配置
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json', '.less'],
        alias: {
            baseURL: 'src/js/base-url.js',
            zepto: 'src/lib/n-zepto.js',
            sm: 'src/lib/smui/sm.min.js',
            smextend: 'src/lib/smui/sm-extend.min.js',
            smPicker: 'src/lib/smui/sm-city-picker.min.js'
        }
    },
    externals: {
        //'$': 'jquery'
        '$': 'zepto'
    }
};
