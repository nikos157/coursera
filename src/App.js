import './App.css';
import Header from "./component/Header"
import Nav from "./component/Nav"
import Footer from './component/Footer';
import Main from "./component/Main"
import BookingPage from "./component/BookingPage"
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"

function App() {
  const [date, setDate] = useState("")
  console.log(date)
  const [time, setTime] = useState("17:00")
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("Birthday")

  function updateTimes(state, selectedDate) {
    if (selectedDate.type === "remove") {
      return state.filter(times => times !== (time))
    }
    state=fetchAPI(selectedDate)
    return [...state]
  }

  const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };
  const fetchAPI = date => {
    let result = [];
    let random = seededRandom(date);
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5)
        result.push(i + ':00');
      if (random() < 0.5)
        result.push(i + ':30');
    }
    return result;
  }

  function initializeTimes() {
    const state = fetchAPI(date);
    return state;
  }

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/BookingPage' element={<BookingPage fetchAPI={fetchAPI} updateTimes={updateTimes} initializeTimes={initializeTimes} date={date} time={time} guests={guests} occasion={occasion} setDate={setDate} setTime={setTime} setOccasion={setOccasion} setGuests={setGuests} />}></Route>
        <Route path='' element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;