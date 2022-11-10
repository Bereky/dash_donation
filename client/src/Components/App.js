import Header from "./Header";
import Hero from "./Hero";
import Donation from "./Donation";
import Completion from "./Completion";
import Error from "./Error";


import DonateProvider from '../Context/DonateProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <DonateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation-complete" element={<Completion />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DonateProvider>
  );
}

export default App;
