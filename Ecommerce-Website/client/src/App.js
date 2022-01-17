import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';
import Home from './components/home/Home';
import TemplateProvider from './components/templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
