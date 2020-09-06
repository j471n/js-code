//link : https://www.codecademy.com/courses/introduction-to-javascript/projects/sleep-debt-calculator


//you getSleep
function getSleepHours(day) {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 10;
    } else if (day === 'sunday') {
        return 8;
    }
}

//get actual sleepHours
function getActualSleepHours() {
     return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

//ideal sleep for human
function getIdealSleepHours(){
    let idealHours = 8;
    return idealHours*7;
}

//calculate and print
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) You got perfect amount of sleep.');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s). You got more sleep than needed.');
    }
    else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt();



