import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Greetings from './Greetings';

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/Greetings">Greetings</NavLink>
            </li>
          </ul>
          </nav>
      </div>

      <Routes>
          <Route path="Greetings" element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;