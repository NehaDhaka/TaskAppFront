import "./Tasks.scss";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Tasks() {
  const [filter, setFilter] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [employeesArr, setEmployeesArr] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks")
      .then((response) => {
        setFilteredList(response.data);
        setTaskList(response.data);
      })

      .then(
        axios
          .get("http://localhost:8080/employees")
          .then((response) => setEmployeesArr(response.data))
      );
  }, []);

  useEffect(() => {
    if (taskList.length === 0) {
      return;
    }
    setFilteredList(() => {
      return taskList.filter((task) => task.description.includes(filter));
    });
  }, [filter]);

  if (taskList.length === 0 || employeesArr.length === 0) {
    return <h1>Loading..</h1>;
  }

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (taskId) => {
    console.log(taskId);
    axios.delete(`http://localhost:8080/tasks/${taskId}`).then(() => {
      axios.get("http://localhost:8080/tasks").then((response) => {
        console.log(response);
        setFilteredList(response.data);
        setTaskList(response.data);
      });
    });
  };
  return (
    <section className="tasks">
      <div className="tasks__topper">
        <h1 className="tasks__heading">Task List</h1>
        <input
          className="tasks__filter"
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </div>
      <ul className="tasks__container">
        {filteredList.map((task) => {
          const filteredEmployee = employeesArr.find((employee) => {
            return employee.id === task.assignedEmployeeId;
          });
          return (
            <li key={task.id} className="tasks__item">
              <div className="tasks__content">
                <p className="tasks__employee">{filteredEmployee.name}</p>
                <p className="tasks__description">{task.description}</p>
              </div>

              <div className="tasks__btn-container">
                <ion-icon name="create"></ion-icon>
                <ion-icon
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                  name="trash-bin"
                ></ion-icon>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
