import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import Error404Page from './pages/Error404Page';
import AccomodationPage from './pages/AccomodationPage';

import './scss/app.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/accomodation/:id" element={<AccomodationPage />}></Route>
          <Route path="*" element={<Error404Page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
