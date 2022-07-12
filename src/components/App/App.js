import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ToDoWrapper from "../ToDos/ToDoWrapper";
import Login from "../Login/Login";
import useToken from "./useToken";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "../../reducers";

function App() {
  const { token, setToken } = useToken();
  const store = configureStore({ reducer: reducer });

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<ToDoWrapper />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
