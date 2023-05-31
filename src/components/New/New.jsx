import "./New.scss";
import axios from "axios";
import { useState, useEffect } from "react";

export default function New() {
  const [employeesList, setEmployeesList] = useState([]);
  const [assignedEmployeeId, setAssignedEmployeeId] = useState(null);
  let isSelected = false;
  useEffect(() => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setEmployeesList(response.data);
    });
  }, []);

  if (employeesList.length === 0) {
    return <h1>Loading...</h1>;
  }

  function handleOnClick() {
    isSelected = true;
  }
  return (
    <section className="new">
      <h1 className="new__heading">New Task</h1>
      <form className="new__form">
        <textarea
          name="description"
          id="description"
          className="new__description"
          cols="30"
          rows="10"
          placeholder="Enter a description.."
        ></textarea>
        <input type="hidden" name="hiddenField" value="hiddenValue"></input>
        <ul className="employees__container">
          {employeesList.map((employee) => (
            <li
              onClick={handleOnClick}
              key={employee.id}
              className={`new__item ${isSelected && "new__selected"}`}
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
