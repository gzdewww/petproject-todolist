import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./styles/index.css";

import App from "./App.jsx";

// Example initial state for lists
// localStorage.setItem(
//   "lists",
//   JSON.stringify([
//     {
//       id: nanoid(16),
//       title: "Дом",
//       todos: [
//         { id: nanoid(8), value: "Помыть посуду", done: true },
//         { id: nanoid(8), value: "Вынести мусор", done: false },
//         { id: nanoid(8), value: "Почитать книжку", done: false },
//       ],
//     },
//     {
//       id: nanoid(16),
//       title: "Работа",
//       todos: [
//         { id: nanoid(8), value: "Написать отчёт", done: false },
//         { id: nanoid(8), value: "Завершить таску", done: false },
//         { id: nanoid(8), value: "Подготовить презентацию", done: true },
//       ],
//     },
//   ])
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
