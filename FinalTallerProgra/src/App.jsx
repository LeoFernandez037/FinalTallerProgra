import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Ejercicios from "./components/Ejercicios.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <div className="contenedorApp">
        <Header />
        <Ejercicios />
      </div>
    </>
  );
}

export default App;
