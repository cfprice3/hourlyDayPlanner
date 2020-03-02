Word Day Scheduler using third party APIs
------------------------------------------

The goal of this project was to create a simple calendar application that allows the user to save events for each hour of the day.  The app would run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

We were provided with the [Moment.js](https://momentjs.com/) library that was needed to work with date and time.

A table of rows and coloumns was created so one could add important events to a daily planner and help manage time effectively.  When opened, the current day is displayed at the top of the page, which time blocks (ranging between 9AM and 5PM- a typical workday) underneath.  The timeblocks are color coded to indicate whether it is in the past, present, or future.  The user can select a timeblock, enter text, then click the save button at the right of the timeblock text box.  The text is then saved in local storage, and the saved events remain even after being refreshed.

The following picture is an screenshot of the scheduler with a couple events entered into some of the timeblocks.
![Work Day Planner](Assets/workDayPic.png)