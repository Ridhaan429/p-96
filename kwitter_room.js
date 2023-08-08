
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      firebase_message_id = childKey;
      message_data = childData; 
      Room_names = childKey;
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data('name');
      message = message_data('message');
      like = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
      like_button="<button class='btn btn-warning' id="
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}