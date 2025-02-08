import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);
  const handleKeyDown = (e) => e.key === "Enter" && value.length && (addTodo(value), setValue(""));
  const handleClick = () => value.length && (addTodo(value), setValue(""));

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={value} className="mr-15 flex-fill" placeholder="Ajouter une tâche" />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}
