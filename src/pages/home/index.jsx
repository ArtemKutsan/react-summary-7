// src/pages/home/index.jsx
import Meta from '../../components/Meta';

function HomePage() {
  return (
    <>
      <Meta title="Главная" />

      <div className="container max-w-3xl prose">
        <h1>React Summary 14</h1>
        <h2>Приложение BookStore на React с Redux</h2>
        <p>Перейдите в раздел "Books" для управления каталогом.</p>
      </div>
    </>
  );
}

export default HomePage;
