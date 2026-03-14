// src/components/Nav/index.jsx
import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Books', path: '/books' },
  { title: 'About', path: '/about' },
];

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 list-none">
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `min-h-8 inline-block text-sm font-semibold px-3 py-1.5 rounded-md ${
                  isActive
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
