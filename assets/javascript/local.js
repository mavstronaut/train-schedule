// Capture Button Click
$("#submit").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

    // Capture user inputs and store them into variables
    var name = $("#employee-name").val().trim();
    var role = $("#role").val().trim();
    var start = $("#start-year").val().trim();
    var end = $("#end-year").val().trim();
    var rate = $("#rate").val().trim();

    // Console log each of the user inputs to confirm we are receiving them
    console.log(name);
    console.log(role);
    console.log(start);
    console.log(end);
    console.log(rate);

    // Replaces the content in the "recent-member" div with the new info
    $("#employee-name-display").text(name);
    $("#role-display").text(role);
    $("#start-year-display").text(start);
    $("#end-year-display").text(end);
    $("#rate-display").text(end);

    // Clear sessionStorage
    // sessionStorage.clear();

    // Store all content into sessionStorage
    sessionStorage.setItem("employee-name", name);
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("start-year", start);
    sessionStorage.setItem("end-year", end);
    sessionStorage.setItem("rate", rate);
  });

  // By default display the content from sessionStorage
  $("#employee-name-display").text(sessionStorage.getItem("employee-name"));
  $("#role-display").text(sessionStorage.getItem("role"));
  $("#start-year-display").text(sessionStorage.getItem("start-year"));
  $("#end-year-display").text(sessionStorage.getItem("end-year"));
  $("#rate-display").text(sessionStorage.getItem("rate"));