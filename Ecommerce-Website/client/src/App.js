import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';
import Home from './components/home/Home';
import TemplateProvider from './components/templates/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
