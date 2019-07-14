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
        $('#exampleModalCenter').modal()
        }
    }