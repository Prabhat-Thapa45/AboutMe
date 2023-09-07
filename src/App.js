import './App.css';
import { Navbar } from './components/Navbar';

import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Resume } from './components/pages/Resume'
import { Repositories } from './components/pages/Repositories'
import { Contact } from './components/pages/Contact'

function App() {
  return (
   <div className='App'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/resume' element={<Resume />} ></Route>
    <Route path='/repositories' element={<Repositories />} ></Route>
    <Route path='/contact' element={<Contact/>} ></Route>
   </Routes>
    </div>
  );
}

export default App;
