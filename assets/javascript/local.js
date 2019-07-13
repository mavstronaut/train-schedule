// Capture Button Click
$("#submit").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

    // Capture user inputs and store them into variables
    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var first = $("#first-train").val().trim();
    var freq = $("#train-freq").val().trim();


    // Console log each of the user inputs to confirm we are receiving them
    console.log(name);
    console.log(destination);
    console.log(first);
    console.log(freq);

    // Replaces the content in the "recent-member" div with the new info
    $("#train-name-display").text(name);
    $("#destination-display").text(destination);
    $("#first-train-display").text(first);
    $("#train-freq-display").text(freq);

    // Clear sessionStorage
    // sessionStorage.clear();

    // Store all content into sessionStorage
    sessionStorage.setItem("train-name", name);
    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("first-train", first);
    sessionStorage.setItem("train-freq", freq);
  });

  var newRow = $("<tr>");
  var newData = $("<th>");
  // By default display the content from sessionStorage
  newData.append(sessionStorage.getItem("train-name"));
  newData.append(sessionStorage.getItem("destination"));
  newData.append(sessionStorage.getItem("first-train"));
  newData.append(sessionStorage.getItem("train-freq"));
