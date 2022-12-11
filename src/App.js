import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from './components/books/books';
import Cliensts from './components/clientns/cliensts';
import Employees from './components/employees/employees';
import Login from './components/login/login';
import Rental from './components/rental/rental';

function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Login/>}/>
          <Route path="/rental" element={<Rental/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/clients" element={<Cliensts/>}/>
          <Route path="/employees" element={<Employees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
