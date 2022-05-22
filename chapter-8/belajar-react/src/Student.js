import { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: 'Agus',
    program: 'Fullstack'
  });

  const handleOnClick = () => {
    // const payload = {
    //   ...student,
    //   name: 'Gading',
    // }

    // const payload = {
    //   program: 'Fullstack',
    //   name: 'Gading',
    // }

    // setStudent(payload);

    setStudent((prevState) => {
      return {
        ...prevState,
        name: 'Gading',
      }
    })
  }

  const changeOne = () => {
    setStudent({
      ...student,
      name: 'Vanesa',
    })
  }

  const changeTwo = () => {
    setStudent({
      ...student,
      name: 'Eko',
    })
  }

  const handleOnClickTwo = () => {
    changeOne();
    changeTwo();
  }

  return (
    <>
      <h1>Name: { student.name }</h1>
      <p>Program: { student.program }</p>
      <br />
      <button onClick={handleOnClick}>
        Update Data
      </button>
    </>
  )
}

export default Student;
