import React from "react";
import AddTodo from "./containers/AddTodo";
import UndoRedo from "./containers/UndoRedo";
import Footer from "./containers/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";

const ToDoWrapper = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default ToDoWrapper;
