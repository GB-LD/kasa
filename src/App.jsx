import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'

import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import Error404Page from './pages/Error404Page';
import AccomodationPage from './pages/AccomodationPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {

const [data, setData] = useState();

useEffect(() => {
  fetch('../src/data/data.json')
  .then(response => response.json())
  .then(data => setData(data));
}, []);

  return (
    <>
      <BrowserRouter>
      <div className="page-wrapper">
        <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage accomodations={data} />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/accomodation/:id" element={<AccomodationPage />}></Route>
            <Route path="*" element={<Error404Page />}></Route>
          </Routes>
        <Footer></Footer>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
