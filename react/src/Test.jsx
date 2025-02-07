import { Fragment, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("compoenent create");

  function handleCounter() {
    setCount(count + 1);
  }

  return (
    <Fragment>
      <div className="card">
        <button onClick={handleCounter}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </Fragment>
  );
}

export default App;
