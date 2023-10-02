import BookingForm from "./BookingForm"

const BookingPage=()=>{
   return (
    <div style={{display: "grid",gridTemplateColumns: "1fr 1fr",height: "100vh"}}>
        <div style={{textAlign: "center", width: "300px", gap:"0", margin:"auto auto auto auto"}}>
            <h1>Reserve A Table</h1>
            <p>Reserve a table now in order to experience our mediteran cuisine first hand</p>
        </div>
        <BookingForm/>
    </div>
   )
}
export default BookingPage