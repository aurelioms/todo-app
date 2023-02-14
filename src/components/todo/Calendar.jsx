/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ setSelectedDate }) => {
    const [startDate, setStartDate] = useState(new Date())

    useEffect(() => {
        setSelectedDate(`${startDate.getDate()}-${startDate.getMonth()+1}-${startDate.getFullYear()}`)
    }, [])

    const setDate = (date) => {
        setStartDate(date)
        setSelectedDate(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
    } 

    return (
        <DatePicker popperProps={{strategy: 'fixed'}} selected={startDate} onChange={setDate} />
    )
}

export default Calendar
