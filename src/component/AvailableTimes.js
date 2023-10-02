const AvailableTimes=()=> {
    let times=["17","18","19","20","21","22"]
    return (times.map(time=><option>{time}:00</option>))
}
export default AvailableTimes