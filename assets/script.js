
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


    });
      
      // event.preventDefault();

  
      trainName = $("#train-name-input").val();
      console.log(trainName);
      destinationInput = $("#destination-input").val();
      console.log(destinationInput);
      timeInput = $("#time-input");
      console.log(timeInput);
      frequencyInput = $("frequency-input");
      console.log(frequencyInput);


      database.ref().set({
        trainName: name,
        destinationInput: destination,
        timeInput: time,
        frequencyInput: frequency

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


  