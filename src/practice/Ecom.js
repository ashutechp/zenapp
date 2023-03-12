//import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';

export const Ecom = () => {
  const initialVal = [{ name: 'T-Shirt', price: 50 }];
  const [products, setProducts] = useState(initialVal);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    console.log('Entered');
    e.preventDefault();
    let newObject = { name: e.target.name.value, price: e.target.price.value };
    setProducts([...products, newObject]);
  };

  const handledelete = (indexToDelete) => {
    /*const newElement = products.filter(function (p, i) {
      if (indexToDelete === i) return false;
      return true;
    });
    */
    const newElement = products.filter((a, i) => i !== indexToDelete);

    setProducts(newElement);
    //console.log('index', indexToDelete);
  };

  const handleEdit = (index) => {
    return (
      <div>
        {products.map((v, i) => {
          return (
            <div>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="number" name="price" />
                <input type="submit" />
              </form>
            </div>
          );
        })}
      </div>
    );
  };

  const getData = (editIndex) => {
    console.log('editIndex = ', editIndex);
    return <div>Hi ALL ---{editIndex}</div>;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="number" name="price" />
        <input type="submit" />
      </form>
      {products.map(function (prod, index) {
        return (
          <div key={index}>
            {index + 1} {' ----    '} {prod.name}
            {'  ----  '}
            {prod.price}
            <button onClick={() => handledelete(index)}>delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        );
      })}
      <br />
      <br />
      <div>{handleEdit()}</div>
    </div>
  );
};
