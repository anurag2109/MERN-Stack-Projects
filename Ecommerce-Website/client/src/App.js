import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
