var config = {
    apiKey: "AIzaSyDucNCjJsbYs1leQvqeLtr4QBSyir4nRdw",
    authDomain: "iliketrains-2020a.firebaseapp.com",
    databaseURL: "https://iliketrains-2020a.firebaseio.com",
    projectId: "iliketrains-2020a",
    storageBucket: "iliketrains-2020a.appspot.com",
    messagingSenderId: "588710853476",
    appId: "1:588710853476:web:867847cffd4f0bbea75871"
};

firebase.initializeApp(config);
var db = firebase.database();

$("#submit").on("click", function (event) {

    event.preventDefault();
    var name = $("#inputTrainName").val();
    var tFrequency = $("#inputFrequency").val();
    var destination = $("#inputDestination").val();
    var tTime = $("#inputFirst-Train-Time").val();

    db.ref().push({
        name: name,
        tFrequency: tFrequency,
        destination: destination,
        tTime: tTime
    });
});

db.ref().on("child_added", function(train){ 
    console.log(train.val());


    ////

//
var tFrequency = parseInt(train.val().tFrequency);
var firstTime = train.val().tTime;   //  "08:00"
var firstTimeConverted = moment(firstTime, "hh:mm");

console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
var diffTime = moment().diff(firstTimeConverted, "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);
var tMinutesTillTrain = tFrequency - tRemainder;      // MINUTES AWAY
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm A");    /// NEXTTRAIN
console.log("ARRIVAL TIME: " + nextTrain);

    ///

var trainList = `<tr><th scope="row">${train.val().name}</th>
<td>${train.val().destination}</td>
<td>${train.val().tFrequency}</td>
<td>${nextTrain}</td>
<td>${tMinutesTillTrain}</td>
</tr>`;
$("#trainList").append(trainList)

});


//gather info from database
//feed info to database
//create trains


var randomDate = "01/21/1997";
var randomFormat = "MM/DD/YYYY";
var convertedDate = moment(randomDate, randomFormat);

console.log(convertedDate.format("MM/DD/YY"));
console.log(convertedDate.format("MMM Do, YYYY hh:mm:ss"));
console.log(convertedDate.format("X"));
console.log("----------------------------------------");
console.log(convertedDate.toNow());
console.log(convertedDate.diff(moment(), "years"));
console.log(convertedDate.diff(moment(), "months"));
console.log(convertedDate.diff(moment(), "days"));
console.log("----------------------------------------");
var newDate = moment("02/14/2001", randomFormat);
console.log(convertedDate.diff(newDate, "days"));
console.log(convertedDate.format("X"));
console.log("----------------------------------------");
console.log(convertedDate.format("DDD"));
console.log(convertedDate.format("dddd"));