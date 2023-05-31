import "./New.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function New() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const [employeesList, setEmployeesList] = useState([]);
  const [assignedEmployeeId, setAssignedEmployeeId] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setEmployeesList(response.data);
    });
  }, []);

  if (employeesList.length === 0) {
    return <h1>Loading...</h1>;
  }

  function handleOnClick(employeeId) {
    setAssignedEmployeeId(employeeId);
  }

  function handleChange(event) {
    const data = event.target.value;
    setDescription(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: small_id,
      description: description,
      isCompleted: false,
      assignedEmployeeId: assignedEmployeeId,
      dueDate: 10,
    };
    axios.post("http://localhost:8080/tasks", formData);
    navigate("/");
  }
  return (
    <section className="new">
      <h1 className="new__heading">New Task</h1>
      <form onSubmit={handleSubmit} className="new__form">
        <textarea
          name="description"
          id="description"
          className="new__description"
          cols="30"
          rows="10"
          placeholder="Enter a description.."
          value={description}
          onChange={handleChange}
        ></textarea>
        <input
          type="hidden"
          name="hiddenField"
          value={assignedEmployeeId}
        ></input>
        <ul className="employees__container">
          {employeesList.map((employee) => (
            <li
              onClick={() => {
                console.log(employee.id);
                handleOnClick(employee.id);
              }}
              key={employee.id}
              className={`new__item`}
            >
              <img className="new__img" src={employee.image} alt="" />
              <p className="new__name">{employee.name}</p>
            </li>
          ))}
        </ul>
        <button className="new__btn">Create</button>
      </form>
    </section>
  );
}
