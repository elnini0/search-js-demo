import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-xl text-gray-600">
          Use the search bar to find products
        </p>
      </main>
    </>
  );
}
