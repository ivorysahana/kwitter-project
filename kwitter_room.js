
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC3C4zfQvKmv3a9cmCRUcvuhTqGOrs_TEI",
      authDomain: "kwitter-7d9f6.firebaseapp.com",
      databaseURL: "https://kwitter-7d9f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d9f6",
      storageBucket: "kwitter-7d9f6.appspot.com",
      messagingSenderId: "96213182426",
      appId: "1:96213182426:web:2208cfa3b99f8f834c42e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
