import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Books', path: '/books' },
  { title: 'About', path: '/about' },
];

function Nav() {
  return (
    <nav>
      <ul className="flex gap-2 list-none">
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `min-h-8 inline-block text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-linear-to-r from-violet-500 to-purple-600 text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
