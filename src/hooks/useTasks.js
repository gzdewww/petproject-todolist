import { useState, useEffect } from "react";
import { nanoid } from "nanoid";


// structure:
// task {id, value, done}
// list {id, title, todos}

export default function useTasks() {
  // Load lists and active list from localStorage or set default
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );

  const [activeList, setActiveList] = useState(
    JSON.parse(localStorage.getItem("activeList")) || ""
  );

  //write in localstorage after state change
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem("activeList", JSON.stringify(activeList));
  }, [activeList]);

  //lists CRUD
  const addList = (title) => {
    const newList = {
      id: nanoid(16),
      title,
      todos: [],
    };
    setLists((prev) => [...prev, newList]);
    setActiveList(newList.id);
  };

  const removeList = (listId) => {
    setLists((prev) => {
      const updated = prev.filter((list) => list.id !== listId);

      console.log(prev.findIndex((item) => item.id === listId));
      setActiveList(
        updated.length > 0
          ? prev[prev.findIndex((item) => item.id === listId) - 1].id
          : ""
      );

      return updated;
    });
  };

  const editList = (listId, newTitle) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId ? { ...list, title: newTitle } : list
      )
    );
  };

  //tasks CRUD
  const addTask = (listId, text) => {
    const newTask = { id: nanoid(8), value: text, done: false };
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId ? { ...list, todos: [...list.todos, newTask] } : list
      )
    );
  };

  const removeTask = (listId, taskId) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? { ...list, todos: list.todos.filter((task) => task.id !== taskId) }
          : list
      )
    );
  };

  const toggleTask = (listId, taskId) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
              ),
            }
          : list
      )
    );
  };

  const editTask = (listId, taskId, newText) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              todos: list.todos.map((task) =>
                task.id === taskId ? { ...task, value: newText } : task
              ),
            }
          : list
      )
    );
  };

  //
  return {
    lists,
    activeList,
    setActiveList,
    addList,
    removeList,
    editList,
    addTask,
    toggleTask,
    removeTask,
    editTask,
  };
}
