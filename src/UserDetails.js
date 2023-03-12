import React from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const { name, age } = useParams();
  return (
    <div>
      UserDetails Name = {name}
      <br />
      Age = {age} <br />
    </div>
  );
};

export default UserDetails;
