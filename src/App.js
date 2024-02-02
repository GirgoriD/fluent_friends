import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import WelcomePage from './components/welcomePage/WelcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path='/' element={<WelcomePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
