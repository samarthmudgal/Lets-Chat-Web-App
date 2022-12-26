const firebaseConfig = {
    apiKey: "AIzaSyC94NhjUuBglQGyiJqn9hkZdy1DZjjU0DE",
    authDomain: "project-94-c0942.firebaseapp.com",
    projectId: "project-94-c0942",
    storageBucket: "project-94-c0942.appspot.com",
    messagingSenderId: "829750355763",
    appId: "1:829750355763:web:14e85515f08421e6de4046",
    measurementId: "G-EVTRKCM7VR"
  };
  user_name
  room_name


  function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}