import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
