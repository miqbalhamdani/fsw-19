import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const DUMMY_STUDENT = [
    { id: 1, name: "iqbal", program: "frontend", live: "bekasi" },
    { id: 2, name: "agus", program: "be", live: "jakarta" },
  ];

  const [studentData, setStudentData] = useState(DUMMY_STUDENT);
  const [formData, setFormData] = useState(null);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   program: '',
  //   live: '',
  // });

  const addStudent = (data) => {
    const lastStudent = studentData[studentData.length - 1];

    const newStudent = {
      ...data,
      id: lastStudent.id + 1,
    };

    setStudentData((prevState) => {
      return [
        ...prevState,
        newStudent,
      ]
    });
  };

  const getStudentData = (data) => {
    setFormData(data);
  };

  const updateStudent = (data) => {
    setStudentData((prevState) => {
      const newStudentData = prevState.filter((student) => student.id !== formData.id);

      console.log('newStudentData', newStudentData);

      return [
        ...newStudentData,
        data,
      ];
    });
  };

  return (
    <div className='app'>
      <Form
        form={formData}
        onAddStudent={addStudent}
        onUpdateStudent={updateStudent}
      />

      <Table
        students={studentData}
        onEditStudent={getStudentData}
      />
    </div>
  );
}

export default App;
