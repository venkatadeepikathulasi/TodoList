import { useState } from "react";
import "./index.css";
const Todo = () => {
  const [texts, setTexts] = useState("");
  const [values, setValues] = useState([]);
  const [edit, setEdit] = useState(null);
  const handleSubmit = () => {
    if (texts) {
      if (edit !== null) {
        const updatedEdit = values.map((item, id) =>
          id === edit ? texts : item
        );
        setValues(updatedEdit);
        setEdit(null);
      } else {
        setValues([...values, texts]);
      }
    }
    setTexts("");
  };
  const handleDelete = (id) => {
    const deleting = values.filter((_, val) => val !== id);
    setValues(deleting);
  };
  const handleEdit = (id) => {
    setTexts(values[id]);
    setEdit(id);
  };
  return (
    <>
      <h1>TODO APPLICATION</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={texts}
        onChange={(e) => setTexts(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>

      {values.map((val, index) => (
        <div key={index}>
          {val}
          <button onClick={() => handleDelete(index)}>🚮</button>
          <button onClick={() => handleEdit(index)}>📝</button>
        </div>
      ))}
    </>
  );
};
export default Todo;
