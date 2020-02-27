// function for the date to be generated
$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
});

// Variables that will dictate what bg color each hour is.
var time = moment();
var format = 'hh:mma';
var topOf9 = moment('9:00am', format);
var bottomOf9 = moment('10:00am', format);
