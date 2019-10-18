import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC49xl45XBllykiIGDPGTibuPle0A4V6Gc",
    authDomain: "expensify-92cf9.firebaseapp.com",
    databaseURL: "https://expensify-92cf9.firebaseio.com",
    projectId: "expensify-92cf9",
    storageBucket: "",
    messagingSenderId: "801139951736",
    appId: "1:801139951736:web:fbb507579bf2feb12b058d"
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