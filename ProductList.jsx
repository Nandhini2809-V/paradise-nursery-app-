import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    image: 'https://images.unsplash.com/photo-1614594975525-aa9b1f46004a?w=300',
    category: 'Low Light Plants'
  },
  {
    id: 2,
    name: 'Monstera',
    price: 25,
    image: 'https://images.unsplash.com/photo-1617172379472-2d4d1aeaff0a?w=300',
    category: 'Indoor Plants'
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    price: 35,
    image: 'https://images.unsplash.com/photo-1614594975525-aa9b1f46004a?w=300',
    category: 'Indoor Plants'
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 20,
    image: 'https://images.unsplash.com/photo-1593482892294-41ce15847fce?w=300',
    category: 'Air Purifying'
  },
  {
    id: 5,
    name: 'Aloe Vera',
    price: 12,
    image: 'https://images.unsplash.com/photo-1459411552884-1c7d4c5fbb9f?w=300',
    category: 'Succulents'
  },
  {
    id: 6,
    name: 'Pothos',
    price: 18,
    image: 'https://images.unsplash.com/photo-1614594975525-aa9b1f46004a?w=300',
    category: 'Hanging Plants'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    alert(`${plant.name} added to cart!`);
  };

  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center', color: 'green'}}>Our Plants</h1>
      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        marginTop: '20px'
      }}>
        {plants.map(plant => (
          <div key={plant.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img src={plant.image} alt={plant.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px'}}/>
            <h3>{plant.name}</h3>
            <p style={{color: 'gray'}}>{plant.category}</p>
            <p style={{fontWeight: 'bold', fontSize: '18px'}}>${plant.price}</p>
            <button 
              onClick={() => handleAddToCart(plant)}
              style={{
                padding: '10px 20px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
