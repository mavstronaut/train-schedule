
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYYCKNVruzRDYYGA4SW-bp8S43bVXGcW8",
    authDomain: "train-project-dd46f.firebaseapp.com",
    databaseURL: "https://train-project-dd46f.firebaseio.com",
    projectId: "train-project-dd46f",
    storageBucket: "",
    messagingSenderId: "1021143483856",
    appId: "1:1021143483856:web:1dcdd834881a8531"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var destination = "";
  var first = "";
  var freq = "";

  // Capture Button Click
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var first = $("#first-train").val().trim();
    var freq = $("#train-freq").val().trim();


    // Code for handling the push
    database.ref().push({
      name: name,
      destination: destination,
      first: first,
      freq: freq,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.destination);
    console.log(sv.first);
    console.log(sv.freq);

    // Change the HTML to reflect
    $("#train-name-display").text(sv.name);
    $("#destination-display").text(sv.role);
    $("#first-train-display").text(sv.start);
    $("#train-freq-display").text(sv.end);


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });