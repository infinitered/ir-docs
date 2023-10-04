// eslint-disable-next-line
module.exports = function (context, options) {
    return {
        name: 'custom-docusaurus-plugin',
        // eslint-disable-next-line
        configureWebpack(config, isServer, utils) {
            return {
                resolve: {
                    alias: {
                        path: require.resolve('path-browserify'),
                    },
                    fallback: {
                        fs: require.resolve('browserify-fs'),
                        http: require.resolve('stream-http'),
                        https: require.resolve('https-browserify'),
                        os: require.resolve('os-browserify/browser'),
                        stream: require.resolve("stream-browserify"),
                        util: require.resolve('util/'),
                        process: require.resolve('process/browser'),
                    },
                },
            };
        },
    };
};
