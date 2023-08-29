import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
