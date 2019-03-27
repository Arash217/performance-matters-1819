module.exports = {
    staticFileGlobs: [
        'build/css/**.css',
        'build/images/**.*',
        'build/js/**.js'
    ],
    stripPrefix: 'build/',
    runtimeCaching: [{
        urlPattern: /countries\/(.+)/,
        handler: 'cacheFirst'
    }]
};