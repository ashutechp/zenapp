import { useState, useEffect } from 'react';
const EcommerceTwo = () => {
  const initialProducts = [{ name: 'Tshirt', price: 1000 }];
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('default name');
  const [price, setPrice] = useState(0);
  console.log('function called');
  //WHENEVER A STATE VARIABLE CHANGES, THE ENTIRE COMPONENT FUNCTION IS CALLED AGAIN.
  //MEANS ENTIRE FUNCTION IS EXECUTED AGAIN
  useEffect(function () {
    console.log('component loaded');
  }, []);
  useEffect(
    function () {
      console.log('name changed');
    },
    [name]
  );
  const addProduct = (event) => {
    console.log(name, price);
    event.preventDefault();
    const newProduct = {
      name: name,
      price: price,
    };
    console.log(newProduct);

    const newProducts = [...products, newProduct];
    console.log(newProducts);
    initialProducts.push(newProduct);
    setProducts(newProducts);
    setName('');
    setPrice(0);
  };
  return (
    <div>
      <ProductForm
        setName={setName}
        setPrice={setPrice}
        addProduct={addProduct}
        name={name}
        price={setPrice}
      />
      {products.map(function (val, index) {
        return <Product product={val} index={index} />;
      })}
    </div>
  );
};

function Product({ product, index }) {
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

function ProductForm({ setName, setPrice, addProduct, name, price }) {
  return (
    <div>
      <form onSubmit={addProduct}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="enter price"
        />
        <button>Add</button>
      </form>
     
    </div>
  );
}
export default EcommerceTwo;
