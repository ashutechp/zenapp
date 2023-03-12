import React from 'react'

export const Login = () => {

    const handleSubmit = () => {
        alert("Login Sucessful");
    }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label for="loginname">Enter Name</label>
        <input type="text" name="loginname" placeholder="Enter Name" /><br/>
        <label for="password">Enter Password</label>
        <input type="password" name="password" placeholder="Enter Name" />
        <input type="submit" />
      </form>
    </div>
  );
}
