import React, { useState } from 'react';

const NewsBangalore = () => {
  const [city, cityName] = useState([{ news1: 'News1' }, { news2: 'News2' }]);
  return (
    <div>
      NewsBangalore
      {city.map((v, i) => {
        return <p key={i}>{v.news1}</p>;
      })}
    </div>
  );
};

export default NewsBangalore;
