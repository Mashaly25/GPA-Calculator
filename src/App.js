
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SemesterBtn from './Components/SemesterBtn';
import Semester1 from './Pages/Semester1';
import Semester2 from './Pages/Semester2';
import Semester3 from './Pages/Semester3';
import Semester4 from './Pages/Semester4';
import Semester5 from './Pages/Semester5';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SemesterBtn/>
      <Routes>
        <Route path='/' element={<Semester5/>}/>
        <Route path='/semester1' element={<Semester1/>}/>
        <Route path='/semester2' element={<Semester2/>}/>
        <Route path='/semester3' element={<Semester3/>}/>
        <Route path='/semester4' element={<Semester4/>}/>
        <Route path='/semester5' element={<Semester5/>}/>
      </Routes>

    </div>
  );
}

export default App;
