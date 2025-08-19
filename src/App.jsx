import { useState } from "react";
import SideBar from "./components/SideBar/SideBar.jsx";
import List from "./components/List/List.jsx";
import { nanoid } from "nanoid";

function App() {
  const [lists, setLists] = useState([
    {
      id: nanoid(16),
      title: "Дом",
      todos: [
        { id: nanoid(8), value: "Помыть посуду", done: true },
        { id: nanoid(8), value: "Вынести мусор", done: false },
        { id: nanoid(8), value: "Почитать книжку", done: false },
      ],
    },
    {
      id: nanoid(16),
      title: "Работа",
      todos: [
        { id: nanoid(8), value: "Написать отчёт", done: false },
        { id: nanoid(8), value: "Завершить таску", done: false },
        { id: nanoid(8), value: "Подготовить презентацию", done: true },
      ],
    },
  ]);

  const [activeList, setActiveList] = useState(lists[0]);

  const [tasks, setTasks] = useState(activeList.todos);

  const addTask = (text) => {
    setTasks([...tasks, { id: nanoid(8), value: text, done: false }]);
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
      <SideBar lists={lists} setActiveList={setActiveList} />
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
