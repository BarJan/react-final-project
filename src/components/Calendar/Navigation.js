import * as React from 'react';
import { getJewishMonths, getJewishYears, getPrevMonth, getNextMonth, convertToHebrew } from 'jewish-dates-core';


function Navigation(props){

    
    return (
        <div className={`navigation`}>
            <div className={`arrowLeft`} onClick={() => {
                const basicJewishMonthInfo = getPrevMonth({ month: props.month, year: props.year, isHebrew: props.isHebrew });
                props.onClick(basicJewishMonthInfo.month, basicJewishMonthInfo.year);
            }}><span></span></div>
            <div className={`monthYearSelection`}>
                <select value={props.month} onChange={(e) => {
                    const month = e.currentTarget.value;
                    props.onClick(month, props.year);
                }}>
                    {getJewishMonths(props.year, props.isHebrew).map(month => {
                        return (<option key={month.id} value={month.id}>{month.text}</option>);
                    })}
                </select>

                <select value={props.year} onChange={(e) => {
                    const year = Number(e.currentTarget.value);
                    props.onClick(props.month, year);
                }}>
                    {getJewishYears(props.year).map(y => {
                        const text = props.isHebrew ? convertToHebrew(y) : y;
                        return (<option key={y} value={y}>{text}</option>);
                    })}
                </select>
            </div>
            <div className={`arrowRight`} onClick={() => {
                const basicJewishMonthInfo = getNextMonth({ month: props.month, year: props.year, isHebrew: props.isHebrew });
                props.onClick(basicJewishMonthInfo.month, basicJewishMonthInfo.year);
            }}>
                <span></span>
            </div>
        </div>
    )
};

export default Navigation;