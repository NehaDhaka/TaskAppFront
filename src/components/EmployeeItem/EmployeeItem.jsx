import "./EmployeeItem.scss";
import { useState, useEffect } from "react";

export default function Employees({ employeesList }) {
  return (
    <ul className="employees__container">
      {employeesList.map((employee) => (
        <li key={employee.id} className="employees__item">
          <img className="employees__img" src={employee.image} alt="" />
          <p className="employees__name">{employee.name}</p>
        </li>
      ))}
    </ul>
  );
}
