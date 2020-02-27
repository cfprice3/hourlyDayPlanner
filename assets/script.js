// function for the date to be generated
$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
});
