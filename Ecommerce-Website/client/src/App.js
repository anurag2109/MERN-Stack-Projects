import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/product/DetailView';
import TemplateProvider from './components/templates/TemplateProvider.js';
import ContextProvider from './context/ContextProvider.js';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/cart" element={<Home/>} /> */}
            <Route exact path='/product/:id' element={<DetailView/>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
