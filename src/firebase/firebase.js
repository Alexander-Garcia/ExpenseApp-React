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

  database.ref().set({
      name: 'Alexander Garcia',
      age: 28,
      isSingle: true,
      location: {
          city: 'Des Moines',
          country: 'United States'
      }
  })

  database.ref('attributes').set({
      height: 68,
      weight: 150
  })

  // attributes 
  //    height
  //    weight