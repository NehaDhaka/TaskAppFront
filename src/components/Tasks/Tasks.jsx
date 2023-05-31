import "./Tasks.scss";
import { useState, useEffect } from "react";
import testData from "../../data.json";

export default function Tasks() {
  const [filter, setFilter] = useState("");
  const [taskList, setTaskList] = useState(testData);

  useEffect(() => {
    setTaskList(() => {
      return testData.filter((item) => item.description.includes(filter));
    });
  }, [filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
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
        {taskList.map((task) => (
          <li className="tasks__item">
            <div className="tasks__content">
              <p className="tasks__employee">{task.employee}</p>
              <p className="tasks__description">{task.description}</p>
            </div>

            <div className="tasks__btn-container">
              <ion-icon name="cloud-upload"></ion-icon>
              <ion-icon name="trash-bin"></ion-icon>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
