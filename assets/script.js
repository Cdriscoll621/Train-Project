
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNtyM2FvK_XYKcGSnqhmIDijALABMxi_I",
    authDomain: "train-schedule-d53fd.firebaseapp.com",
    databaseURL: "https://train-schedule-d53fd.firebaseio.com",
    projectId: "train-schedule-d53fd",
    storageBucket: "train-schedule-d53fd.appspot.com",
    messagingSenderId: "785536136847"
  };
  firebase.initializeApp(config);



   var database = firebase.database();

    var trainName = "";
    var destinationInput = "";
    var timeInput = 0;
    var frequencyInput= "";


    $("#add-train").on("click", function() {


   
      
      event.preventDefault();

  
      trainName = $("#name-input").val();
        console.log(trainName);
      destinationInput = $("#destination-input").val();
        console.log(destinationInput);
      timeInput = $("#time-input").val();
      
        var timeSplit = timeInput.split(":");
        var timeConvert = moment().hours(timeSplit[0]).minutes(timeSplit[1]);
        var timeFormat = timeConvert.format("hh:mm a");
          console.log("First train at " + timeFormat);

      frequencyInput = $("#frequency-input").val();
          console.log("Every " + frequencyInput + " minutes");

      database.ref().set({
        trainName: trainName,
        destinationInput: destinationInput,
        timeInput: timeInput,
        frequencyInput: frequencyInput

        

      });

      $("#name-input").val("");       
        $("#destination-input").val("");
        $("#time-input").val("");
        $("#frequency-input").val("");

      var timeDiff = moment().diff(moment(timeConvert), "minutes");
        console.log(timeDiff + " since first train");

      var timeRemain = timeDiff % frequencyInput;
        console.log(timeRemain + " remainder");

      var tilTrain = frequencyInput - timeRemain;
        console.log(tilTrain + " Until next train");

      var nextTrain = moment().add(tilTrain, "minutes");

      var nextTrainArrive = moment(nextTrain).format("hh:mm a");
        console.log("Next train arrives at " + nextTrainArrive);

      var tabs = "<tr><td>" + trainName + "</td><td>" + destinationInput + "</td><td>" + frequencyInput + "</td><td>" + nextTrainArrive + "</td><td>" + tilTrain + "</td></tr>";

      $("#my-table").append(tabs); 

    });




      


    
    // database.ref().on("value", function(snapshot) {


      // console.log(snapshot.val());
      // console.log(snapshot.val().name);
      // console.log(snapshot.val().destination);
      // console.log(snapshot.val().time);
      // console.log(snapshot.val().frequency);

      // $("#trainName").text(snapshot.val().name);
      // $("#destinationInput").text(snapshot.val().destination);
      // $("#timeInput").text(snapshot.val().time);
      // $("#frequencyInput").text(snapshot.val().frequency);

     
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });


  