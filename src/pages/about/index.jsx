import Meta from '../../components/Meta';

function AboutPage() {
  return (
    <>
      <Meta title="О приложении" />

      <div className="container max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_6px_16px_rgba(99,102,241,0.30)]">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">О приложении</h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis culpa doloribus
              repellendus placeat praesentium beatae dolores consequatur nisi velit reprehenderit.
            </p>
            <p className="text-slate-600 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla voluptatum repellat
              quam quaerat voluptas distinctio dolorem repellendus voluptatem, ab error aperiam
              eveniet veritatis, accusamus vitae! Reprehenderit quaerat sapiente vitae hic.
            </p>
            <p className="text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, consequatur?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
