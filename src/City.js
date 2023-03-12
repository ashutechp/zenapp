import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const City = () => {
  const { cityname } = useParams();
  return (
    <div>
      Welcome to City : {cityname} <Outlet />
    </div>
  );
};

export default City;
