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
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: '₹350',
      image: '/images/richdad.png'
    },
    {
      title: 'Ikigai',
      author: 'Héctor García',
      price: '₹320',
      image: '/images/ikigai.png'
    },
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      price: '₹420',
      image: '/images/deepwork.png'
    },
    {
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      price: '₹380',
      image: '/images/thinkgrow.png'
    },
    {
      title: 'Do Epic Shit',
      author: 'Ankur Warikoo',
      price: '₹299',
      image: '/images/doepicshit.png'
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: '₹399',
      image: '/images/psychmoney.png'
    },
    {
      title: "Can't Hurt Me",
      author: 'David Goggins',
      price: '₹460',
      image: '/images/canthurtme.png'
    }
  ];

  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen w-screen pt-10 px-6 pb-10">
      <div className="py-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {books.map((book, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-white/30 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-contain bg-white p-4"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-white drop-shadow">{book.title}</h2>
              <p className="text-white/80 mt-1">by {book.author}</p>
              <p className="text-black text-lg font-semibold mt-3">{book.price}</p>
              <button className="mt-5 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
