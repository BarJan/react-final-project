import Hebcal from 'hebcal';

class DateObj{
    constructor(parseDate){
        this.date = new Hebcal.HDate(parseDate.get("pickeDate"));
    }

    getDate(){
        return this.date.getDate();
    }

    getMonth(){
        return this.date.getMonth();
    }

    getFullYear(){
        return this.date.getFullYear();
    }
}

export default DateObj;