import React, {useState} from "react"
import AvailableTimes from "./AvailableTimes"
const BookingForm=()=> {
    const [date,setDate]=useState(null)
    const [time,setTime]=useState(null)
    const [guests,setGuests]=useState(1)
    const [occasion,setOccasion]=useState(null)
    function handleClick(e) {
        e.preventDefault();
        setDate("")
        setTime("")
        setGuests("")
        setOccasion("")
    }

    return (
        <form style={{display: "grid", maxWidth: "200px",minWidth:"200px", gap: "20px", margin:"auto auto auto auto"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e)=>{setDate(e.target.value)}} required/>
                <label  htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                    <AvailableTimes/>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>{setGuests(e.target.value)}} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                <button type="submit" disabled={!date} onClick={handleClick}>Make Your reservation</button>
        </form>
    )
}
export default BookingForm