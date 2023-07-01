import './App.css';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import MainSection from './MainSection';
import ActAdv from './Pages/ActAdv';
import MystThri from './Pages/MystThri';
import Historical from './Pages/Historical';
import Fantasy from './Pages/Fantasy';
import Fiction from './Pages/Fiction';
import Romance from './Pages/Romance';
import { UserContext } from './UserContext';
import { useState } from 'react';
import Cart from './Cart';

function App() {
  // const [value, setValue] = useState({"noqty":0, "books":[], "price":0})
  const [value, setValue] = useState({"noqty":0, "fp":0, "booktem":[]}) ;


  return (
    <Router>
      <UserContext.Provider value={{value, setValue}}>
      <div className="App">
        <div className="heading">
          <div className="SideBar">
            <Sidebar />
          </div>
        </div>
          <Routes>
            <Route path='/' element={<MainSection />}/>
            <Route path="/romance" element={<Romance />} />
            <Route path="/adventure" element={<ActAdv />} />
            <Route path="/mystery" element={<MystThri />} />
            <Route path="/historical" element={<Historical />} />
            <Route path="/fantasy" element={<Fantasy />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
