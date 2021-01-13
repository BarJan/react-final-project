import {getHebDate} from 'react-native-jewish-calendar';
import Hebcal from 'hebcal';

class DateObj{
    constructor(parseDate){
        this.date = getHebDate(new Date(parseDate.date));
    }
}