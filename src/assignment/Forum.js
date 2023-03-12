import React from 'react';

export const Forum = () => {
  const handleSubmit = (e) => {
    alert(`${e.target.date.value} and ${e.target.title.value}`);
  };
  return (
    <div>
      Forum
      <form onSubmit={handleSubmit}>
        <label for="date">Enter Name</label>
        <input type="date" name="date" placeholder="Enter Date" />
        <br />
        <label for="title">Enter Password</label>
        <input type="textarea" name="title" placeholder="Enter Topic" />
        <input type="submit" />
      </form>
    </div>
  );
};
