import './App.css';
import Login from './components/login/Login';
import {
  Route,
  Routes
} from 'react-router-dom'
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/dashboard';
import JourneyCard from './components/journey-card/JourneyCard';
function App() {
  return (

    <div className="App">
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/journey' element={<JourneyCard />} />
    </Routes>
  </div>
  );
}

export default App;
