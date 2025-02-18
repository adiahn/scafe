import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    'all',
    'snacks',
    'burger',
    'shawarma',
    'pizza',
    'breakfast',
    'lunch',
    'sideDishes',
    'salads',
    'desserts',
    'extras'
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></div>
              <h1 className="text-2xl font-bold tracking-tighter">S·CAFE</h1>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#menu" className="hover:text-purple-400 transition-colors">Menu</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50"/>
        <div className="absolute inset-0 bg-[url('/restaurant-bg.jpg')] bg-cover bg-center opacity-30"/>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Future of Dining
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Experience culinary innovation at the intersection of tradition and technology
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-black/30 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all
                          ${activeCategory === category 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'}`}
              >
                {category === 'all' 
                  ? 'All Menu' 
                  : category.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Menu activeCategory={activeCategory} />
      </main>
    </div>
  );
}

export default App;
