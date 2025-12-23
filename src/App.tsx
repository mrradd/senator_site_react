import { observer } from 'mobx-react-lite';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

export const App = observer(() => {
  return (
    <div>
      <header>
        <h1>The Senator</h1>
        <h4>Full-Stack Developer</h4>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
})

