function Home() {
  const books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      price: '₹499',
      image: '/images/atomic.png'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: '₹399',
      image: '/images/alchemist.png'
    },
    {
      title: 'The Red House Mystery',
      author: 'A.A Milne',
      price: '₹450',
      image: '/images/redhouse.png'
    }
  ];

  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen w-screen pt-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="bg-white shadow rounded overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-auto object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-blue-600 font-semibold mt-2">{book.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
