import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './component/BookingForm';
function initializeTimes() {
  const state = ["17", "18", "19", "20", "21", "22"]
  return state
}
function updateTimes(state, selectedDate) {
  const time="12"
  if (selectedDate.type === "remove") {
    return state.filter(times => times !== (time.slice(0, 2)))
  } else {
    return
  }
}
describe ("initialize",()=>{
  test("gives first number",()=>{
    render(<BookingForm initializeTimes={initializeTimes}/>)
    const initialize = initializeTimes()
    expect(initialize).toEqual(["17", "18", "19", "20", "21", "22"])
  })
})

describe("initialize", () => {
  test("updates", () => {
    render(<BookingForm updateTimes={updateTimes} initializeTimes={initializeTimes} />)
    const update = updateTimes(["12","345"],{type:"remove"})
    expect(update).toEqual(["345"])
  })
})
describe("initialize", () => {
  test("updates", () => {
    render(<BookingForm updateTimes={updateTimes} initializeTimes={initializeTimes} />)
    const heading = screen.getByLabelText("Choose date")
    expect(heading).toBeInTheDocument()
  })
})
