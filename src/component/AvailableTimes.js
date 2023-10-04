
const AvailableTimes=(props)=> {
    return (props.times.map(time=><option key={time}>{time}:00</option>))
}
export default AvailableTimes