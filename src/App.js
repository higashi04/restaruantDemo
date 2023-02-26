import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home.jsx'
//components
import NavigationBar from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
        <Outlet/>
        <Footer/>
      </>
  );
}

export default App;
