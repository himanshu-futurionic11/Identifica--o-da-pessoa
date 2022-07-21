import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard/UserDashboard';

function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<UserDashboard/>}/>
    </Routes>
    
    </>
  );
}

export default App;
