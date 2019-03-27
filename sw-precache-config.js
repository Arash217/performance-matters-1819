module.exports = {
    dynamicUrlToDependencies: {
      '/countries': 'views/countries.hbs'
    },
    staticFileGlobs: [
        'public/manifest.json',
        'public/main.js',
        'public/css/**.css',
        'public/images/flags/**.svg',
        'public/images/icons/**.*',
        'public/js/**.js'
    ],
    stripPrefix: 'public/',
    runtimeCaching: [{
        urlPattern: /countries\/.+/,
        handler: 'cacheFirst'
    }],
    swFile: 'public/service-worker.js',
    verbose: true
};