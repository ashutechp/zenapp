import { useEffect, useState } from 'react';
import axios from 'axios';

export const Todo = () => {
  const [todos, setTodos] = useState([{ item: 'default', status: false }]);
  const addTodos = (e) => {
    e.preventDefault();
    let newObj = { name: e.target.name.value, status: e.target.status.checked };
    console.log(newObj);
    //let newObjNew = [...todos, newObj];
    setTodos([...todos, newObj]);
  };
  return (
    <div>
      <h1>My Todo</h1>
      <form onSubmit={addTodos}>
        <input type="text" name="name" />
        <input type="checkbox" name="status" />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((val, index) => {
          return (
            <li key={index}>
              {val.item} with the status {val.status.toString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
