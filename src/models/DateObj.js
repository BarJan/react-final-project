import Hebcal from 'hebcal';

class DateObj{
    constructor(parseDate){
        this.date = new Hebcal.HDate(parseDate.get("pickeDate"));
    }

    getDate(){
        return this.date.getDate();
    }

    getGreg(){
        return this.date.greg();
    }

    getMonth(){
        return this.date.getMonth();
    }

    getFullYear(){
        return this.date.getFullYear();
    }
}

export default DateObj;