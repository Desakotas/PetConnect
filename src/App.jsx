import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Breeds from './Breeds';
import Register from './Register';
import Subscribe from './Subscribe';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState('Home');
  const [username, setUsername] = useState('');

  return (
    <>
      <Header setPage={setPage} username={username}/>
      { page === 'Home' && <Home setPage={setPage}/> } 
      { page === 'About' && <About/> }
      { page === 'Breeds' && <Breeds/> }
      { page === 'Register' && <Register/>} 
      { page === 'Subscribe' && <Subscribe/>} 
      <Footer/>
    </>
  );
}

export default App;
