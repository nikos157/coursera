import './App.css';
import Header from "./component/Header"
import Nav from "./component/Nav"
import Footer from './component/Footer';
import Main from "./component/Main"
import BookingPage from "./component/BookingPage"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Nav/>
    <Routes>
      <Route path='/BookingPage' element={<BookingPage/>}></Route>
      <Route path='' element={<Main/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
