import kotakStyle from "./Kotak.module.css";

const Kotak = () => {
  const name = "iqbal Hamdani";

  const descStyle = {
    color: 'blue',
    fontSize: '50px',
  }

  return (
    <>
      <h1 style={{color: 'red', fontSize: '100px' }}>
        Hello World { name }
      </h1>

      <p style={descStyle}>Lorem ipsum</p>

      <div className={kotakStyle['kotak-hitam']}></div>

      <br></br>

      <div className={kotakStyle.biru}></div>
    </>
  )
}

export default Kotak;
