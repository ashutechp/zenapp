import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCallback } from 'react';

import sanitizeHtml from 'sanitize-html';

export const TodoApp = () => {
  const [todos, setTodos] = useState([{ name: 'default', status: false }]);
  const [inputError, setInputError] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    fetchTodos();
  }, []);
  const handleTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: e.target.item.value,
      status: e.target.status.checked,
    };
    let promise = axios.post('todos', newTodo);
    promise.then(function () {
      console.log('data submitteb');
    });
    console.log(newTodo);
  };

  const fetchTodos = () => {
    const promiseOne = axios.get('todos');
    promiseOne
      .then(function (res) {
        console.log(res.data);
        setTodos(res.data);
        fetchTodos();
      })
      .catch((error) => console.log(error));
  };
  const deleteTodos = (id) => {
    const promise = axios.delete(`todos/${id}`);
    promise
      .then(function (res) {
        console.log(res.data);
        fetchTodos();
      })
      .catch((error) => console.log(error));
  };

  const checkBlur = (event) => {
    let inputVal = event.target.value;
    if (inputVal.length < 2 || inputVal.inputVal > 20) {
      setInputError(true);
    }
  };

  const onContentBlur = (val) => (evt) => {
    //alert(val._id);
    const sanitizeConf = {
      allowedTags: ['b', 'i', 'a', 'p'],
      allowedAttributes: { a: ['href'] },
    };

    let updateObj = { ...val, name: evt.currentTarget.innerHTML };
    axios
      .put(`todos/${val._id}`, updateObj)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log('evt.currentTarget.innerHTML', evt.currentTarget.innerHTML);

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  };
  return (
    <div>
      TodoApp
      <form onSubmit={handleTodo}>
        <input type="text" name="item" onBlur={checkBlur} />
        <input type="checkbox" name="status" />
        {inputError ? <span>Input must be min 2 and max 3</span> : ''}
        <input type="submit" />
      </form>
      {todos.map((val, index) => {
        return (
          <TodoItem
            key={index}
            onContentBlur={onContentBlur}
            val={val}
            deleteTodos={deleteTodos}
            content={content}
          />
        );
      })}
    </div>
  );
};

const TodoItem = ({ onContentBlur, val, deleteTodos, content }) => {
  console.log('content =', content);
  console.log('val =', val);
  return (
    <div>
      <span contentEditable onBlur={onContentBlur(val)}>
        {val.name}
      </span>
      <span>With status = {val.status.toString()}</span>
      <button onClick={() => deleteTodos(val._id)}>Delete</button>
    </div>
  );
};

/* 
// just after form
 <ul>
        {todos.map((v, i) => {
          return (
            <li key={i}>
              {v.name} with the status is {v.status.toString()}
              <button
                onClick={() => {
                  deleteTodos(v._id);
                }}
              >
                Delete{' '}
              </button>
            </li>
          );
        })}
      </ul>
*/
