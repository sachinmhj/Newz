import './App.css';
import Items from './components/Items';
import Navbr from './components/Navbr';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbr/>
      <Routes>
        {/* for categories */}
        <Route path='/' element={<Items pgsize={10} catg="general"/>}/>
        <Route path='/business' element={<Items pgsize={10} catg="business"/>}/>
        <Route path='/entertainment' element={<Items pgsize={10} catg="entertainment"/>}/>
        <Route path='/food' element={<Items pgsize={10} catg="food"/>}/>
        <Route path='/health' element={<Items pgsize={10} catg="health"/>}/>
        <Route path='/science' element={<Items pgsize={10} catg="science"/>}/>
        <Route path='/sports' element={<Items pgsize={10} catg="sports"/>}/>
        <Route path='/technology' element={<Items pgsize={10} catg="technology"/>}/>
        {/* for categories */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
