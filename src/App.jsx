import SideBar from "./components/SideBar/SideBar.jsx";
import List from "./components/List/List.jsx";
import useTasks from "./hooks/useTasks.js";

function App() {
  const {
    lists,
    activeList,
    setActiveList,
    addList,
    removeList,
    addTask,
    removeTask,
    toggleTask,
  } = useTasks();
  return (
    <>
      <SideBar
        lists={lists}
        activeList={activeList}
        setActiveList={setActiveList}
        addList={addList}
        removeList={removeList}
      />
      <main className="content">
        {lists.length > 0 ? (
          <List
            items={lists.find((list) => list.id === activeList)?.todos || []}
            onAdd={(text) => addTask(activeList, text)}
            onDelete={(taskId) => removeTask(activeList, taskId)}
            onToggle={(taskId) => toggleTask(activeList, taskId)}
          />
        ) : (
          <h1 className='empty-lists'><span className="anim">🚀</span> ToDoList</h1>
        )}
      </main>
    </>
  );
}

export default App;
