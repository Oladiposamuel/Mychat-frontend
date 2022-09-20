import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import Chat from './screens/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "" element={<Home/>}/>
          <Route path= "/signup" element={<SignUp />} />
          <Route path= "/signin" element={<SignIn />} /> 
          <Route path= "/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
