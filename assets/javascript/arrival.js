         var firebaseConfig = {
            apiKey: "AIzaSyBYYCKNVruzRDYYGA4SW-bp8S43bVXGcW8",
            authDomain: "train-project-dd46f.firebaseapp.com",
            databaseURL: "https://train-project-dd46f.firebaseio.com",
            projectId: "train-project-dd46f",
            storageBucket: "",
            messagingSenderId: "1021143483856",
            appId: "1:1021143483856:web:1dcdd834881a8531"
        };
        
        firebase.initializeApp(firebaseConfig);
        
        var database = firebase.database();



        $("#submit").on("click", function(event) {
        event.preventDefault();
        var trainName = $("#train-name").val().trim();
        var trainDestination = $("#destination").val().trim();
        var trainFirstTime = moment($("#first-train").val().trim(), "hh:mm").format("X");
        var trainFrequency = $("#train-freq").val().trim();
        var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: trainFirstTime,
        frequency: trainFrequency,
        };

        database.ref().push(newTrain);
        
        console.log('newTrain.name = ' + newTrain.name);
        console.log('newTrain.destination = ' + newTrain.destination);
        console.log('newTrain.first = ' + newTrain.first);
        console.log('newTrain.frequency = ' + newTrain.frequency);
        
        $("#train-name").val("");
        $("#destination").val("");
        $("#first-train").val("");
        $("#train-freq").val("");
        });
        database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainFirstTime = childSnapshot.val().first;
        var trainFrequency = childSnapshot.val().frequency;
        console.log('trainName = ' + trainName);
        console.log('trainDestination = ' + trainDestination);
        console.log('trainFirstTime = ' + trainFirstTime);
        console.log('trainFrequency = ' + trainFrequency);


        // Prettify the train first time
        var trainFirstTimePretty = moment.unix(trainFirstTime).format("LT");
        console.log('trainFirstTimePretty = ' + trainFirstTimePretty);
        // Current Time
        var currentTime = moment();
        console.log("Current Time: " + moment(currentTime).format("hh:mm"));
        // Difference between the times
        var diffTime = moment().diff(moment.unix(trainFirstTime), "minutes"); 
        console.log("Difference in Time (diffTime): " + diffTime);
        //The console is saying NaN.
        // Time apart (remainder)
        var tRemainder = diffTime % trainFrequency;
        console.log('tRemainder = ' + tRemainder);
        //The console is saying NaN.
        // Minute Until Train
        var tMinutesTillTrain = trainFrequency - tRemainder;
        console.log("Minutes Until Train: " + tMinutesTillTrain);
        //The console is saying NaN.
        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        var nextTrainPretty = moment(nextTrain).format("LT");
        console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));
        console.log("Arrival Time Pretty: " + nextTrainPretty);
        $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFirstTimePretty + "</td><td>" + trainFrequency + "</td><td>" + nextTrainPretty + "</td><td>" + tMinutesTillTrain + "</td><td>");
        });
        var idleTime = 0;
        $(document).ready(function () {
        //Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 20000); // 1 minute
            //Zero the idle timer on mouse movement.
        $(this).mousemove(function (e) {
        idleTime = 0;
        });
        $(this).keypress(function (e) {
        idleTime = 0;
         });
    });
        function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 1) { // 20 minutes
        }
    }