// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyDC3uTtOhkmE0KKS3xp7qYQeNxkn7dbV2I',
    authDomain: 'ionic-miniapp.firebaseapp.com',
    projectId: 'ionic-miniapp',
    storageBucket: 'ionic-miniapp.appspot.com',
    messagingSenderId: '82641742297',
    appId: '1:82641742297:web:e319d33f0d7c1d8e2091c8',
    measurementId: '${config.measurementId}'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
