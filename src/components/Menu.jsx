import React from 'react';

const Menu = ({ activeCategory }) => {
  const menuItems = {
    snacks: [
      { name: 'Meatpie', price: '1,000', tags: ['Popular'] },
      { name: 'Samosa', price: '200', tags: ['Light'] },
      { name: 'Doughnut', price: '300', tags: ['Sweet'] },
      { name: 'Chicken Pie', price: '1,000', tags: ['Popular'] },
      { name: 'Chicken Roll', price: '200', tags: ['Light'] },
    ],
    burger: [
      { name: 'Beef Burger', price: '3,500', tags: ['Bestseller'] },
      { name: 'Beef Sandwich', price: '1,500', tags: ['Classic'] },
      { name: 'Chicken Sandwich', price: '1,500', tags: ['Classic'] },
    ],
    shawarma: [
      { name: 'Big Chicken Shawarma', price: '4,000', tags: ['Popular'] },
      { name: 'Small Chicken Shawarma', price: '2,500', tags: ['Light'] },
      { name: 'Big Beef Shawarma', price: '4,000', tags: ['Popular'] },
      { name: 'Small Beef Shawarma', price: '2,500', tags: ['Light'] },
    ],
    pizza: [
      { name: 'Margherita', price: '10,000', tags: ['Classic'] },
      { name: 'Beef Pizza', price: '9,000', tags: ['Popular'] },
      { name: 'Chicken Pizza', price: '9,000', tags: ['Popular'] },
      { name: 'Combo Pizza', price: '10,000', tags: ['Special'], description: 'Beef & Chicken' },
    ],
    breakfast: [
      { name: 'Milk Tea', price: '1,000', tags: ['Hot'] },
      { name: 'Coffee', price: '1,000', tags: ['Hot'] },
      { name: 'Black Tea', price: '1,300', tags: ['Hot'] },
      { name: 'Golden Yam', price: '2,000', tags: ['Local'] },
      { name: 'Chips and Egg', price: '3,400', tags: ['Popular'] },
      { name: 'Plantain and Egg', price: '2,500', tags: ['Local'] },
    ],
    lunch: [
      { name: 'Moi-Moi', price: '600', tags: ['Local'] },
      { name: 'Fried Rice', price: '1,750', tags: ['Popular'] },
      { name: 'White Rice', price: '1,850', tags: ['Classic'] },
      { name: 'Jollof Rice', price: '1,750', tags: ['Popular', 'Local'] },
      { name: 'Brown Rice', price: '4,000', tags: ['Healthy'] },
      { name: 'Chinese Rice', price: '4,000', tags: ['Special'] },
      { name: 'Indomie Noodles', price: '1,500', tags: ['Quick'] },
      { name: 'Spaghetti Stir Fry', price: '3,000', tags: ['Special'] },
      { name: 'Beans Porridge', price: '2,000', tags: ['Local'] },
      { name: 'S-Cafe Oriental Rice', price: '3,500', tags: ['Signature'] },
    ],
    sideDishes: [
      { name: 'Egg Sauce', price: '2,000', tags: ['Popular'] },
      { name: 'Gizzard Sauce', price: '1,500', tags: ['Popular'] },
      { name: 'Spicy Fried Fish', price: '1,500', tags: ['Spicy'] },
      { name: 'Peppered Beef', price: '600', tags: ['Spicy'] },
      { name: 'Peppered Chicken', price: '1,500', tags: ['Spicy'] },
      { name: 'Peppered Goat Meat', price: '1,500', tags: ['Spicy'] },
    ],
    salads: [
      { name: 'Coleslaw', price: '500', tags: ['Fresh'] },
      { name: 'Fruit Salad', price: '1,000', tags: ['Fresh', 'Healthy'] },
      { name: 'Chicken Salad', price: '3,500', tags: ['Special'] },
      { name: 'Green Salad', price: '500', tags: ['Fresh', 'Healthy'], description: 'Lettuce' },
    ],
    desserts: [
      { name: 'Cupcake', price: '500', tags: ['Sweet'] },
      { name: 'Swizzroll', price: '1,300', tags: ['Sweet'] },
      { name: 'Milk Cake', price: '3,500', tags: ['Special'] },
      { name: 'Red Velvet', price: '3,500', tags: ['Special'] },
      { name: 'Vanilla Cake', price: '3,500', tags: ['Classic'] },
      { name: 'Chocolate Cake', price: '3,500', tags: ['Classic'] },
      { name: 'Vanilla Ice Cream', price: '1,200', tags: ['Cold'] },
      { name: 'Strawberry Ice Cream', price: '1,200', tags: ['Cold'] },
    ],
  };

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.entries(menuItems);
    }
    if (menuItems[activeCategory]) {
      return [[activeCategory, menuItems[activeCategory]]];
    }
    return [];
  };

  return (
    <div className="space-y-12">
      {getFilteredItems().map(([category, items]) => (
        <div key={category} className="space-y-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                         from-purple-400 to-pink-400 capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div key={index} 
                   className="group relative overflow-hidden rounded-2xl 
                            bg-white/5 backdrop-blur-sm border border-white/10 
                            hover:border-purple-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags?.map((tag, i) => (
                      <span key={i} 
                            className="px-2 py-1 rounded-full text-xs font-medium
                                     bg-purple-500/20 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 
                                   transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-purple-400">₦</span>
                      <span className="text-lg font-bold text-white">{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu; 