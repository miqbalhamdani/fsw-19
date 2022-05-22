import "./Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>NO</td>
          <td>Nama</td>
          <td>Program Kelas</td>
          <td>Domisili</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
          { props.students.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.program}</td>
                <td>{item.live}</td>
                <td>
                  <button onClick={() => props.onEditStudent(item)}>Edit</button>
                  {/* <button onClick={props.onEditStudent(item)}>Edit</button> */}
                  {/* <button onClick={exampleFunction}>Edit</button> */}
                </td>
              </tr>
            );
          }) }
      </tbody>
    </table>
  )
}

export default Table;
