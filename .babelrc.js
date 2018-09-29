module.exports = {
     presets: [
            ['@babel/preset-env', {
                //debug: true,
                modules: false,
                targets: {
                    browsers: [
                        'last 2 versions',
                        'not ie < 11'
                    ]
                },
                //useBuiltIns: 'usage'
            }]
        ],
    plugins: [
        // ['@babel/plugin-transform-runtime', {
        //     helpers: true,
        //     polyfill: true,
        //     regenerator: true
        // }]
    ]
};
