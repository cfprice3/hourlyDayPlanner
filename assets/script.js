// function for the date to be generated
$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
});

// Variables that will dictate what bg color each hour is.
var scheduleArray = [];
var time = moment();
var format = 'hh:mma';

//--------- 9am------------------------------
var topOf9 = moment('9:00am', format);
var bottomOf9 = moment('10:00am', format);

//--------- 10am-----------------------------
var topOf10 = moment('10:00am', format);
var bottomOf10 = moment('11:00am', format);

//--------- 11am-----------------------------
var topOf11 = moment('11:00am', format);
var bottomOf11 = moment('11:59am', format);

//--------- 12pm-----------------------------
var topOf12 = moment('12:00pm', format);
var bottomOf12 = moment('12:59pm', format);

//--------- 1pm------------------------------
var topOf1 = moment('1:00pm', format);
var bottomOf1 = moment('1:59pm', format);

//--------- 2pm------------------------------
var topOf2 = moment('2:00pm', format);
var bottomOf2 = moment('2:59pm', format);

//--------- 3pm------------------------------
var topOf3 = moment('3:00pm', format);
var bottomOf3 = moment('3:59pm', format);

//--------- 4pm------------------------------
var topOf4 = moment('4:00pm', format);
var bottomOf4 = moment('4:59pm', format);

//--------- 5pm------------------------------
var topOf5 = moment('5:00pm', format);
var bottomOf5 = moment('5:59pm', format);

//--------- reset----------------------------
var reset = moment('12:00am', format);


// Function to add user input, and record what time block, into an array to be used to put into local storage
function applySavedText(time, details) {

    var newText = {
        time: time,
        title: details
    }
  
    // Array to locally store user's input so it stays even if page is refreshed.
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];

    // pushes new saved text to scheduleArray
    scheduleArray.push(newText);
  
    // refreshes saved date to array in local storage
    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
    
}

// Write the schedule array to html
function writeToSchedule() {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    scheduleArray.map(newText => {
        if (newText.title != 0) {
            $(newText.time).html(newText.title);
        }
    });
}


// Click functions for each hour
$("#saveBtn9").click(function () {
    var addedText = "#textArea9";
    var savedText = document.getElementById('textArea9').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn10").click(function () {
    var addedText = "#textArea10";
    var savedText = document.getElementById('textArea10').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn11").click(function () {
    var addedText = "#textArea11";
    var savedText = document.getElementById('textArea11').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn12").click(function () {
    var addedText = "#textArea12";
    var savedText = document.getElementById('textArea12').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn1").click(function () {
    var addedText = "#textArea1";
    var savedText = document.getElementById('textArea1').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn2").click(function () {
    var addedText = "#textarea2";
    var savedText = document.getElementById('textarea2').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn3").click(function () {
    var addedText = "#textArea3";
    var savedText = document.getElementById('textArea3').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn4").click(function () {
    var addedText = "#textArea4";
    var savedText = document.getElementById('textArea4').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

$("#saveBtn5").click(function () {
    var addedText = "#textArea5";
    var savedText = document.getElementById('textArea5').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});
