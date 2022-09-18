import './App.css';
import Login from './components/login/Login';
import {
  Route,
  Routes
} from 'react-router-dom'
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/dashboard';
function App() {
  return (

    <div className="App">
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </div>
  );
}

export default App;
