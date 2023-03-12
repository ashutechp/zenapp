import { useEffect, useState } from 'react';

export const EcommerceOne = () => {
  const initialProducts = [{ name: 'Tshirt', price: 1000 }];
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('Default Name');
  const [price, setPrice] = useState('');
  //console.log('Function calling');
  useEffect(function () {
    console.log('One time loaded');
  }, []);

  useEffect(
    function () {
      console.log('When name changed it get loads loaded');
    },
    [name]
  );
  const addProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      price,
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length > 10) {
      alert('Should not be greater than 10');
    }
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    if (e.target.value >= 1000) {
      alert('Should not be greater than 1000');
    }
  };

  return (
    <div>
      <form onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />

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

export default EcommerceOne;
