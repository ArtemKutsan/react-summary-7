// src/components/not-found/index.jsx
// import styles from './not-found.module.css';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div className="container text-center py-12">
      <h1 className="mb-4 text-2xl">Страница {location.pathname} не найдена</h1>
      <p className="text-slate-500 mb-6">Вы будете перенаправлены на Home page через 3 секунды</p>
      <Link to="/" className="button button-primary">
        Go Home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
