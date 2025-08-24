import SideBar from "./components/SideBar/SideBar.jsx";
import List from "./components/List/List.jsx";
import useTasks from "./hooks/useTasks.js";
import styles from "./styles/App.module.css";
import { useState } from "react";
import CustomButton from "./UI/CustomButton/CustomButton.jsx";

function App() {
  const {
    lists,
    activeList,
    setActiveList,
    addList,
    removeList,
    editList,
    addTask,
    removeTask,
    toggleTask,
    editTask,
  } = useTasks();

  const [filter, setFilter] = useState("");

  const filterTasks = (tasks) => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.done;
      if (filter === "completed") return task.done;
      return true;
    });
  };

  return (
    <>
      <SideBar
        lists={lists}
        activeList={activeList}
        setActiveList={setActiveList}
        addList={addList}
        removeList={removeList}
        editList={editList}
      />
      <main className={styles.content}>
        {lists.length > 0 && activeList ? (
          <List
            items={
              filterTasks(
                lists.find((list) => list.id === activeList)?.todos
              ) || []
            }
            onAdd={(text) => addTask(activeList, text)}
            onDelete={(taskId) => removeTask(activeList, taskId)}
            onToggle={(taskId) => toggleTask(activeList, taskId)}
            onChange={(taskId, newText) =>
              editTask(activeList, taskId, newText)
            }
            filter={filter}
            setFilter={setFilter}
          />
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default App;
