import { useState, useEffect } from 'react';
import './Form.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [live, setLive] = useState('');

  useEffect(() => {
    if (props.form) {
      setName(props.form.name);
      setProgram(props.form.program);
      setLive(props.form.live);
    }
  }, [props.form]);

  const nameOnChangeHandle = (event) => {
    setName(event.target.value);
  }

  const programOnChangeHandle = (event) => {
    setProgram(event.target.value);
  }

  const liveOnChangeHandle = (event) => {
    setLive(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (props.form) {
      const data = {
        id: props.form.id,
        name: name,
        program: program,
        live: live,
      }

      props.onUpdateStudent(data);
    } else {
      const data = {
        name: name,
        program: program,
        live: live,
      }

      props.onAddStudent(data);
    }

    setName('');
    setProgram('');
    setLive('');
  }

  const title = props.form
    ? "EDIT STUDENT"
    : "ADD STUDENT";

  return (
    <form className="form__controls" onSubmit={onSubmit}>
      <h2>{title}</h2>
      <div className="form__control">
        <label>Nama</label>
        <input type="text" value={name} onChange={nameOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Program Kelas</label>
        <input type="text" value={program} onChange={programOnChangeHandle}></input>
      </div>
      <div className="form__control">
        <label>Domisili</label>
        <input type="text" value={live} onChange={liveOnChangeHandle}></input>
      </div>

      <button type='submit' className='form__actions'>
        Submit
      </button>
    </form>
  )
};

export default Form;
