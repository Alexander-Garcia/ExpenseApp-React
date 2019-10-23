import * as firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()


  export { firebase, database as default } 



//   database.ref().set({
//       name: 'Alexander Garcia',
//       age: 28,
//       isSingle: false,
//       location: {
//           city: 'Des Moines',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('data is saved')
//   }).catch((e) => {
//     console.log('This failed' , e)
//   })

//   database.ref('attributes').set({
//       height: 68,
//       weight: 150
//   }).then(() => {
//       console.log('second set call worked')
//   }).catch((e) => {
//     console.log('things didnt work', e)
//   })

//     // equivalent to calling remove()
// //   database.ref('isSingle').set(null)

// //   database.ref('age').set(27)
// //   database.ref('location/city').set('Wentzville')


// //   database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('data was removed')
// //   }).catch((e) => {
// //     console.log('data wasnt removed' , e )
// //   })