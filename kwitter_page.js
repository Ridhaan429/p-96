const firebaseConfig = {
      apiKey: "AIzaSyAOk5vaEV5FTgGd6Ra5kIEMg7W_3Q7fipY",
      authDomain: "kwitter-6e47b.firebaseapp.com",
      databaseURL: "https://kwitter-6e47b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e47b",
      storageBucket: "kwitter-6e47b.appspot.com",
      messagingSenderId: "1082213619200",
      appId: "1:1082213619200:web:021e2ad39619e30e1d6ae5"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
      } });  }); }
getData();
