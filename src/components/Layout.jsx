// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
