module.exports = function (context, options) {
    return {
        name: 'support-symlinks',
        configureWebpack(config, isServer, utils) {

            return {
                resolve: {
                    ...config.resolve,
                    symlinks: false,
                }
            }
        },
    };
};
