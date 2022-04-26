const firebaseConfig = {

    apiKey: "AIzaSyCcMrqMswXRwqVWz2hXF65c04byzQvT9X8",
  
    authDomain: "fir-chat-7431a.firebaseapp.com",
  
    databaseURL: "https://fir-chat-7431a-default-rtdb.firebaseio.com",
  
    projectId: "fir-chat-7431a",
  
    storageBucket: "fir-chat-7431a.appspot.com",
  
    messagingSenderId: "254460273386",
  
    appId: "1:254460273386:web:f72a218fa9b037f8642d93"
  
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref();
const auth = firebase.auth();
auth.useDeviceLanguage();
