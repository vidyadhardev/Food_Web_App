// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import Home from './components/pages/Home';
// import Login from './components/pages/Login';
//  import SignUp from './components/pages/SignUp';
// import Contact from './components/pages/Contact';
// import About from './components/pages/About';
// import Navbar from './components/Navbar';
// function App() {
//   return (
//    <Router>
//    <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/signup' element={<SignUp/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/about' element={<About/>}/>
//     </Routes>
//    </Router>
//   );
// }
// export default App;

import React from 'react';

import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Testimonials from './components/pages/Testimonials';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
const App = () => {
  return (
    <div>
    <Home/>
    <About/>
    <Work/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;