
// React Router parts:
// - BrowserRouter needs to exist higher up in the component tree than whatever we are writing Routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <About /> 
// - Route specifies URL and component, belongs to Routes
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <h1>This h1 shows on every page</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/about" element={<AboutPage />}> */}
          
        {/* Route for /about /contact page
        <Route path="/about/contact" element={<ContactPage />} /> */}

        {/* Route for /about closing */}
        {/* </Route> */}

        {/* <Route path="about" element={<AboutPage />} /> */}

        {/* <Route path="contact" element={<ContactPage />} /> */}

        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;