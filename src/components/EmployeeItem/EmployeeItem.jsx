import "./EmployeeItem.scss";
import { useState, useEffect } from "react";
import employees from "../../employees.json";

export default function Employees({ employeesList }) {
  return (
    <ul className="employees__container">
      {employeesList.map((employee) => (
        <li className="employees__item">
          <img className="employees__img" src={employee.imageUrl} alt="" />
          <p className="employees__name">{employee.name}</p>
        </li>
      ))}
    </ul>
  );
}
