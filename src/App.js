import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Student } from './Students';
import { Ecommerce } from './Ecommerce';
import { Ecom } from './practice/Ecom';
import { EcommerceOne } from './EcommerceOne';
import { Square } from './Square';
import EcommerceTwo from './EcommerceTwo';
import { Todo } from './Todo';
import Login from './Login';
import { Forum } from './assignment/Forum';
import { Calculator } from './assignment/Calculator';
import { TodoApp } from './TodoApp';
import EcomClassBased from './classComponents/EcomClassBased';
import NewsBangalore from './NewsBangalore';
import City from './City';
import { Blog } from './contextexample/Blog';
import Store from './reduxcode/store/store';
import {
  BrowserHistory,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import NotFound from './NotFound';
import UserDetails from './UserDetails';
import ForgotPassword from './ForgotPassword';
import ReduxCounter from './reduxcode/ReduxCounter';
import { useSelector } from 'react-redux';
//import { Todo } from './Todo';
function App() {
  /* Store.subscribe(function () {
    console.log(Store.getState());
  });

  Store.dispatch({ type: 'increase' });
  Store.dispatch({ type: 'increase' });
  Store.dispatch({ type: 'increase' });
  */
  
   const [count] = useSelector((state) => {
     //console.log('STATE =', state);
     return [state.count];
   });

 
  const name = 'sandeey';
  return (
    <div className="App">
      <p>The redux counter is { count}</p>
      <BrowserRouter>
        <a href="login">Login regular Link</a>
        <br />

        <Link to="/">Home</Link>
        <br />
        <Link to={`/usedetails/${name}/24`}> Use Details </Link>
        <br />
        <Link to="/login/sumit">Login</Link>
        <br />
        <Link to="/login/forgotpassword">Forgot Password</Link>
        <br />
        <Link to="/city/bangalore">Select City</Link>
        <br />
        <Link to="/city/bangalore/news">City News</Link>
        <br />
        <Link to="/context">Context</Link>
        <br />
        <Link to="/reduxcounter">Reduxcounter</Link>
        <br />
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/:name/" element={<Login />}>
            <Route path="forgotpassword" element={<ForgotPassword />} />
          </Route>
          <Route path="/city/:cityname/" element={<City />}>
            <Route path="news" element={<NewsBangalore />} />
          </Route>

          <Route path="/usedetails/:name/:age" element={<UserDetails />} />
          <Route path="/context" element={<Blog />} />
          <Route path="/reduxcounter" element={<ReduxCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
<button onClick={hideShow}> show/hide</button>
      {show ? <h1>Hide Show property</h1> : ''}
      {show && <EcommerceTwo />}
      <EcommerceTwo />
      <Square no={number} student={studentOb} func={greet} />
      <Todo />
      <Login />
      <Forum />
      <Calculator />

*/

/*
 let [number, setNumber] = useState(4);
  let [initialCount, setInitialCount] = useState(10);
  let studentOb = { name: 'Ashutosh', city: 'Bangalore' };
  function greet() {
    alert('Good Afternoon');
  }

  const hideShow = () => {
    setShow(!show);
  };
  let [show, setShow] = useState(false);
  return (
    <div className="App">
      {show ? <EcomClassBased initialCount={initialCount} /> : ''}
      <button
        onClick={() => {
          setInitialCount(initialCount + 1);
        }}
      >
        Increment
      </button>
      <button onClick={hideShow}>Hide Show</button>
    </div>
  );
*/
