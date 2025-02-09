import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Lodging from './page/lodging';
import Error from './page/error';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import './style/style.scss'

const App = () => {
  const location = useLocation();
  const isErrorPage = location.pathname === '/error';
  const mainClass = isErrorPage ? 'error' : '';
  

  return (
    <div className="App">
      <Header />
      <main className={mainClass}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lodging/:id' element={<Lodging />} />
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<Navigate to ='/error' />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;