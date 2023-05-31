import "./Employees.scss";
import { useState, useEffect } from "react";
import employees from "../../employees.json";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
export default function Employees() {
  const [filter, setFilter] = useState("");
  const [employeesList, setEmployeesList] = useState(employees);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employees").then((response) => {
      setFilteredList(response.data);
      setEmployeesList(response.data);
    });
  }, []);

  useEffect(() => {
    setEmployeesList(() => {
      return employees.filter((employee) => employee.name.includes(filter));
    });
  }, [filter]);

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
      <EmployeeItem employeesList={employeesList} />
    </section>
  );
}
