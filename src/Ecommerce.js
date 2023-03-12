import { useState } from 'react';

export const Ecommerce = () => {
  const initialProducts = [{ name: 'Tshirt', price: 1000 }];
  const [products, setProducts] = useState(initialProducts);
  const addProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      name: event.target.name.value,
      price: event.target.price.value,
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    
  };
  return (
    <div>
      <form onSubmit={addProduct}>
        <input type="text" name="name" />
        <input type="number" name="price" />
        <button>Add</button>
      </form>

      {products.map((val, i) => {
        return (
          <div>
            <p>{val.name}</p>
            <p>{val.price}</p>
          </div>
        );
      })}
    </div>
  );
};
