import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function useTasks() {
  // Load initial lists from localStorage or set default
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );

  const [activeList, setActiveList] = useState(
    JSON.parse(localStorage.getItem("activeList")) || ""
  );

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem("activeList", JSON.stringify(activeList));
  }, [activeList]);

  // const [tasks, setTasks] = useState(
  //   lists.find((list) => list.id === activeList)?.todos || []
  // );

  const addList = (title) => {
    const newList = {
      id: nanoid(16),
      title,
      todos: [],
    };
    setLists([...lists, newList]);
    setActiveList(newList.id);
  };

  const removeList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
    if (activeList === id) {
      setActiveList(updatedLists.length > 0 ? updatedLists[0].id : "");
    }
  };

  const addTask = (listId, text) => {
    const newTask = { id: nanoid(8), value: text, done: false };
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, todos: [...list.todos, newTask] } : list
      )
    );
  };

  const removeTask = (listId, taskId) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? { ...list, todos: list.todos.filter((task) => task.id !== taskId) }
          : list
      )
    );
  };

  const toggleTask = (listId, taskId) => {
    setLists(
      lists.map((list) =>
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

  //
  return {
    lists,
    activeList,
    setActiveList,
    addList,
    removeList,
    addTask,
    toggleTask,
    removeTask,
  };
}
