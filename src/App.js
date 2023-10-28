import Footer from './components/Footer'
import Header from './components/Header'

import './App.css';
import RestCard from './components/RestCard';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
