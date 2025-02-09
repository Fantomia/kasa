import { Routes, Route } from 'react-router-dom'
import Home from './page/home';
import About from './page/about';
import Lodging from './page/lodging';
import Error from './page/error';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import './style/style.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;