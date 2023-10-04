import AvailableTimes from "./AvailableTimes"
import React, { useReducer } from "react"

const BookingForm=(props)=> {
    const updateTimes= props.updateTimes
    const initializeTimes=props.initializeTimes()
    const [state,dispatch]=useReducer(updateTimes,initializeTimes)
    console.log(state)
    function handleClick(e) {
        dispatch({type: "remove"})
        e.preventDefault();
        props.setDate("")
        props.setTime(state[0])
        props.setGuests(1)
        props.setOccasion("Birthday")
    }
    return (
        <form style={{display: "grid", maxWidth: "200px",minWidth:"200px", gap: "20px", margin:"auto auto auto auto"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={props.date} onChange={(e)=>{props.setDate(e.target.value); updateTimes(state,e.target.value);}}/>
                <label  htmlFor="res-time">Choose time</label>
                <select id="res-time" value={props.time} onChange={(e)=>{props.setTime(e.target.value)}}>
                    <AvailableTimes times={state}/>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.guests} onChange={(e)=>{props.setGuests(e.target.value)}} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={props.occasion} onChange={(e)=>{props.setOccasion(e.target.value)}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                <button type="submit" disabled={!props.date} onClick={handleClick} >{!props.date?"Choose a date":"Make Your reservation"}</button>
        </form>
    )
}
export default BookingForm