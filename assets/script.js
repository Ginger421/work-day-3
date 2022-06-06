//create variable from class container in html where time blocks will be stored
const container = $('.container');

const todayDate = document.getElementById("currentDay");

//will give hour of the day in am/pm
const currentTime = moment().format("h");

setInterval(time, 1000);

//display current date and time
function time() {
    $(todayDate).text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

//current time
var thisMoment = moment().format('LT');


//create function to see if current day and time is within desired range
//will need range but do i need start and end  as separate variables?
//will need variable to compare to

//hour, text, submit
//colstart is time
//colMiddle is for text input
//colEnd has not been assigned
function timeBlock(block){
    const row = $('<div>').attr('class', 'row');
    const colStart = $('<div>').attr('class', 'col-sm-2 border');
    if (block > 12) {
        colStart.text(block - 12)
    } else{
        colStart.text(block);
    }
    const colMiddle = $('<textarea>').attr('class', 'col-md-8 border');
    colMiddle.attr('id', 'task'); //create id for savinf to loc stor
    const button = $('<button>').attr('id', 'button');
    const colEnd = $('<div>').attr('class', 'col-sm-2 border');
    $(colEnd).append(button);
    $(row).append(colStart);
    $(row).append(colMiddle);
    $(row).append(colEnd);
    return row;
    console.log(container);
}

function getHours(params) {
for (let block = 9; block <= 17; block++){
$(container).append(timeBlock(block))
}
}

getHours();

//compare current time to time block to see if past,present, furure
for (let block = 9; block < 17; block++) {
    if (block < currentTime) {
        $(row).css('background-color', 'grey');
    } else if (block > currentTime) {
        $(row).css('background-color', 'red');
    } else {
        $(row).css('background-color', 'green');
    }
}



//local storage
$("#button").on("click", function (event) {
    event.preventDefault();

    var textInput = $('#task');
    var textValue = textInput.val();
    localStorage.setItem('textInput', textValue);
    localStorage.getItem(textInput);
    }

)

//const save = document.getElementById('button');
//save.addEventListener('click', function () {
//    localStorage.setItem('key', 'button')
//})

console.log($(container).children());


//create containers for each one hour time block
//create forms to fill in selected hours
    //use loop to go over the dates and times with same informationn
    //
//local storage to save info in cotainers
