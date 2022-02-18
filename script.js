const firebaseConfig = {
    apiKey: "AIzaSyBqiTWzSJbahNyHxMiS4XgmYWJ4kwmYZT8",
    authDomain: "html-chat-app-by-crius.firebaseapp.com",
    projectId: "html-chat-app-by-crius",
    storageBucket: "html-chat-app-by-crius.appspot.com",
    messagingSenderId: "294966226222",
    appId: "1:294966226222:web:cfca7e6b89f8f43a08debf"
  };

  firebase.initializeApp(firebaseConfig);

  var myName = prompt("Enter Your Username")

  var myRoom = prompt("Enter Your Room name Or Create Room ( Type Main Room For Public Chat )")


  function submitMessage() {

      var message_val = document.getElementById("message").value;

      firebase.database().ref(myRoom).push().set({
          "sender" : myName,
          "message" : message_val
      });

      return false;
  }

  firebase.database().ref(myRoom).on("child_added", function(snapshot) {
      var html = "";
      html += "<li>";
          html += snapshot.val().sender + " : " + snapshot.val().message;
      html += "</li>";

      document.getElementById("main_chat_div").innerHTML += html;


  })