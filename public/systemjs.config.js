// map tells the System loader where to look for things
var map = {
        // our app is within the app folder
        app: '/',

        // angular bundles
        '@angular/core': 'js/vendor/@angular/core/bundles/core.umd.js',
        '@angular/common': 'js/vendor/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'js/vendor/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'js/vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'js/vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'js/vendor/@angular/http/bundles/http.umd.js',
        '@angular/router': 'js/vendor/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'js/vendor/@angular/forms/bundles/forms.umd.js',
        '@angular/material': 'js/vendor/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'js/vendor/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'js/vendor/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'js/vendor/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        'hammerjs': 'js/vendor/hammerjs/',
        // other libraries
        'rxjs':                       'js/vendor/rxjs',
        'angular2-in-memory-web-api': 'js/vendor/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'angular2-cookie':            'js/vendor/angular2-cookie',
        '@ng-bootstrap':               'js/vendor/@ng-bootstrap/ng-bootstrap/bundles'
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    app: {
        main: '/boot.js',
        defaultExtension: 'js'
    },
    rxjs: {
        defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
    },
    'angular2-cookie': {
      main: './core.js',
      defaultExtension: 'js'
    },
    '@ng-bootstrap': {
      main: './index.js',
      defaultExtension: 'js'
    }
};

var config = {
    map: map,
    packages: packages
};

System.config(config);
