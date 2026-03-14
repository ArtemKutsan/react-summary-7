// src/components/sections/Header/index.jsx
// import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Header() {
  return (
    <header className="bg-slate-900 py-6 sticky top-0 z-50 text-slate-100">
      <div className="container max-w-5xl flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          React
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
