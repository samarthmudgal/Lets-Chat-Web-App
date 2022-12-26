const firebaseConfig = {
    apiKey: "AIzaSyC94NhjUuBglQGyiJqn9hkZdy1DZjjU0DE",
    authDomain: "project-94-c0942.firebaseapp.com",
    projectId: "project-94-c0942",
    storageBucket: "project-94-c0942.appspot.com",
    messagingSenderId: "829750355763",
    appId: "1:829750355763:web:14e85515f08421e6de4046",
    measurementId: "G-EVTRKCM7VR"
  };
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding  room  name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "index.html";
  }

//Start code
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
//End 

function rediectToRoomName(name)
{
 
  console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}
function logout()
{
  localStorage.removeIyem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
