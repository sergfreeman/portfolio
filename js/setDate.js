//Geberate a current date in format dd:mm:yyyy
export function setTheDate(){
    let date = new Date();
    let day, month, year;
    day = String(date.getDate());
    month = String(date.getMonth() + 1);
    year = String(date.getFullYear());
    return (setZero(day) + ':' + setZero(month) + ':' + year)
}

function setZero(val) {
    if (val.length === 1){
        val = '0' + val;
    }
    return val
}