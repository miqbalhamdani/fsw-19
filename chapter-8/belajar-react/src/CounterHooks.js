import { useState } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Tes {count}</h1>
      <button onClick={handleOnClick}>
        Tambah Count
      </button>
    </>
  )
}

export default CounterHooks;
