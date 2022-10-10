import './App.css';
import SignIn from './component/signIn';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/dahsboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
