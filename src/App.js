import {  BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <HomePage /> }  />
        <Route exact path='/about' element={ <AboutPage /> }  />
        <Route exact path='/contact' element={ <ContactPage /> }  />
        <Route exact path='/login' element={ <LoginPage /> }  />
        <Route exact path='/register' element={ <RegisterPage /> }  />
        <Route exact path='/products/:id' element={ <ProductPage /> }  />
      </Routes>

    </Router>
  );
}

export default App;
