import { Outlet, useParams } from 'react-router-dom';
function Login() {
  const { name } = useParams();
  const loginMe = (name) => {
    alert('i am logging you = ', name);
  };
  return (
    <div>
      <h3>{name}</h3>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button onClick={() => loginMe(name)}>Login</button>
      <Outlet />
    </div>
  );
}
export default Login;
