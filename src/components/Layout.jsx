// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-8 mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
