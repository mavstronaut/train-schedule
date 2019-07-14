    //Questions
    // How does it work for every train?
    // how does the code add additional rows instead of overwriting only
    $(document).ready(), function(event) {
      event.preventDefault();

    // Assumptions   
    // var name = $("#employee-name").val().trim();
    // var destination = $("#destination").val().trim();
    // var first = $("#first-train").val().trim();
    // var freq = $("#train-freq").val().trim();
    var nextTrain = "" // this will probably change after we do the calculation

    var tFrequency = sessionStorage.getItem("train-freq");

    // Time is 3:30 AM
    var firstTime = sessionStorage.getItem("first-train");;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    // store next train
    sessionStorage.setItem("next-train", nextTrain);
    // display next train
    $("#next-display").text(sessionStorage.getItem("next-train"));

    function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 1) { // 20 minutes
      $('#exampleModalCenter').modal()
      }
  }
    };