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

//----------------9AM-----------------------
$("#saveBtn9").click(function () {
    var addedText = "#textArea9";
    var savedText = document.getElementById('textArea9').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//----------------10AM----------------------
$("#saveBtn10").click(function () {
    var addedText = "#textArea10";
    var savedText = document.getElementById('textArea10').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//----------------11AM----------------------
$("#saveBtn11").click(function () {
    var addedText = "#textArea11";
    var savedText = document.getElementById('textArea11').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//---------------12PM------------------------
$("#saveBtn12").click(function () {
    var addedText = "#textArea12";
    var savedText = document.getElementById('textArea12').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//----------------1PM-------------------------
$("#saveBtn1").click(function () {
    var addedText = "#textArea1";
    var savedText = document.getElementById('textArea1').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//---------------2PM-------------------------
$("#saveBtn2").click(function () {
    var addedText = "#textarea2";
    var savedText = document.getElementById('textarea2').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//---------------3PM-------------------------
$("#saveBtn3").click(function () {
    var addedText = "#textArea3";
    var savedText = document.getElementById('textArea3').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//---------------4PM------------------------
$("#saveBtn4").click(function () {
    var addedText = "#textArea4";
    var savedText = document.getElementById('textArea4').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

//---------------5PM------------------------
$("#saveBtn5").click(function () {
    var addedText = "#textArea5";
    var savedText = document.getElementById('textArea5').value;
    applySavedText(addedText, savedText);
    writeToSchedule();
});

// function to check current time and adjust the colors of the background of each hour slot based on
// if it is before, during, or after the current time.
setInterval(function () {
    checkTime();
}, 1000);

function checkTime() {
    
//------------------9AM-------------------------------
    if (time.isBefore(topOf9)) {
       $('#text9').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf9, bottomOf9)) {
        $('#text9').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf9)) {
        $('#text9').css('background', '#d3d3d3');
    }

//------------------10AM------------------------------
    if (time.isBefore(topOf10)) {
        $('#text10').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf10, bottomOf10)) {
        $('#text10').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf10)) {
        $('#text10').css('background', '#d3d3d3');
    }

//------------------11AM------------------------------
    if (time.isBefore(topOf11)) {
        $('#text11').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf11, bottomOf11)) {
        $('#text11').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf11)) {
        $('#text11').css('background', '#d3d3d3');
    }

//------------------12PM------------------------------
    if (time.isBefore(topOf12)) {
        $('#text12').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf12, bottomOf12)) {
        $('#text12').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf12)) {
        $('#text12').css('background', '#d3d3d3');
    }

//------------------1PM-------------------------------
    if (time.isBefore(topOf1)) {
        $('#text1').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf1, bottomOf1)) {
        $('#text1').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf1)) {
        $('#text1').css('background', '#d3d3d3');
    }

//------------------2PM-------------------------------
    if (time.isBefore(topOf2)) {
        $('#text2').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf2, bottomOf2)) {
        $('#text2').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf2)) {
        $('#text2').css('background', '#d3d3d3');
    }

//------------------3PM-------------------------------
    if (time.isBefore(topOf3)) {
        $('#text3').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf3, bottomOf3)) {
        $('#text3').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf3)) {
        $('#text3').css('background', '#d3d3d3');
    }

//------------------4PM-------------------------------
    if (time.isBefore(topOf4)) {
        $('#text4').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf4, bottomOf4)) {
        $('#text4').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf4)) {
        $('#text4').css('background', '#d3d3d3');
    }

//------------------5PM-------------------------------
    if (time.isBefore(topOf5)) {
        $('#text5').css('background', '#77dd77');
    }
    else if (time.isBetween(topOf5, bottomOf5)) {
        $('#text5').css('background', '#ff6961');
    }
    else if (time.isAfter(bottomOf5)) {
        $('#text5').css('background', '#d3d3d3');
    }


    //---------------reset for the schedule end of day------------------
    if (time.isBetween(reset, topOf9)) {
        $('#text9').css('background', '#77dd77');
        $('#text10').css('background', '#77dd77');
        $('#text10').css('background', '#77dd77');
        $('#text12').css('background', '#77dd77');
        $('#text1').css('background', '#77dd77');
        $('#text2').css('background', '#77dd77');
        $('#text3').css('background', '#77dd77');
        $('#text4').css('background', '#77dd77');
        $('#text5').css('background', ' #77dd77');
    }
};