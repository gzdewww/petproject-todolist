import { useState } from "react";
import SideBar from "./components/SideBar/SideBar.jsx";
import List from "./components/List/List.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, value: "Помыть ножки", done: false },
    { id: 2, value: "Погладить нюшеньку", done: true },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), value: text, done: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <SideBar />
      <main className="content">
        <List
          items={tasks}
          onAdd={addTask}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </main>
    </>
  );
}

export default App;
