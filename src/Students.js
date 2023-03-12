import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
//import './mystyle.css';
function Student() {
  let initialVal = ['Sumit', 'Riti', 'Uttam'];
  const [students, setStudents] = useState(initialVal);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(function () {
    console.log('Staudent variable modified');
  });

  useEffect(function () {
    console.log('Staudent component loaded');
  }, []);
  function addStudent(event) {
    //the event object that has information about the event .the event is form submit because we are
    //submitting the form
    console.log(event);
    //using this function we are able to prevent the default behavour of form submit event which is to send data
    //to the url
    event.preventDefault();
    //event.target gives the the dom object on which the event happend. that particular tag object.
    let formDOmObject = event.target;
    console.log(formDOmObject);
    //now that we have form object, we can access any form element in the form object using the name.
    console.log(formDOmObject.name);
    //.value property returns the value entered in the particular input tag.
    console.log(formDOmObject.name.value);
    let newStudents = [...students, formDOmObject.name.value];
    setStudents(newStudents);
  }
  function clearAll() {
    setStudents([]);
  }
  const deleteStudent = (indexToDelete) => {
    let newStudentsArr = students.filter(function (val, index) {
      if (index === indexToDelete) return false;
      return true;
    });

    console.log(newStudentsArr);
    setStudents(newStudentsArr);
  };
  return (
    <div className="Students">
      <form onSubmit={addStudent}>
        <input type="text" name="name" placeholder="enter student name" />
        <button>Add </button>
      </form>
      {students.map(function (val, index) {
        return (
          <div key={index}>
            index = {index} {val}
            <button
              onClick={() => {
                deleteStudent(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={clearAll}>Clear All</button>
      <Outlet />;
    </div>
  );
}

export { Student };
