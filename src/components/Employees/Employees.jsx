import "./Employees.scss";
import { useState, useEffect } from "react";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import axios from "axios";
export default function Employees() {
  const [filter, setFilter] = useState("");
  const [employeesList, setEmployeesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setFilteredList(response.data);
      setEmployeesList(response.data);
    });
  }, []);

  useEffect(() => {
    if (employeesList.length === 0) {
      return;
    }
    setFilteredList(() => {
      return employeesList.filter((employee) => employee.name.includes(filter));
    });
  }, [filter]);

  if (employeesList.length === 0) {
    return <h1>Loading..</h1>;
  }
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section className="employees">
      <div className="employees__topper">
        <h1 className="employees__heading">Employees</h1>
        <input
          className="employees__filter"
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </div>
      <EmployeeItem employeesList={filteredList} />
    </section>
  );
}
