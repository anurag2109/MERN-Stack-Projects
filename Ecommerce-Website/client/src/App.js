import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
