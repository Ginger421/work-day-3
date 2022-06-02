//create variable from class container in html where time blocks will be stored
const container = $('.container');

const todayDate = document.getElementById("currentDay");

//hours in work day, but do need to change to military time?
var workDay = [9, 10, 11, 12, 1, 2, 3, 4];

setInterval(time, 1000);

//display current date and time
function time() {
    $(todayDate).text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

//create function to see if current day and time is within desired range
//will need range but do i need start and end  as separate variables?
//will need variable to compare to

let workWeek = moment().format('dddd'); //gives day of week monday, tuesday, wednesday...

if (workWeek === Monday ||
    workWeek === Tuesday ||
    workWeek === Wednesday||
    workWeek === Thursday||
    workWeek === Friday
    ) {
    //allow display and text input
} else {
    "It's the weekend!"
}

//hour, text, submit
//colstart is time
//colMiddle is for text input
//colEnd has not been assigned
for (let block = 0; block <= 8; block++) {
    const row = $('<div>').attr('class', 'row');
    const colStart = $('<div>').attr('class', 'col-sm-2');
    const colMiddle = $('<div>').attr('class', 'col-md-8');
    const colEnd = $('<div>').attr('class', 'col-sm-2');
    row.append(colStart);
    row.append(colMiddle);
    row.append(colEnd);
    container.append(row);
}




//create containers for each one hour time block
//create forms to fill in selected hours
    //use loop to go over the dates and times with same informationn
    //
//local storage to save info in cotainers
