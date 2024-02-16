import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import WelcomePage from './components/welcomePage/WelcomePage';
import AboutPage from './components/aboutPage/AboutPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path='/' element={<WelcomePage />} />
          <Route exact path='/fluent_friends' element={<WelcomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
