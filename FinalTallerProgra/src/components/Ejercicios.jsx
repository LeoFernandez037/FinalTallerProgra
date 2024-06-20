import React from "react";
import "./Ejercicios.css";

const Ejercicios = () => {
  return (
    <div className="tarjetaEjercicios">
      <img src="../public/imagen1.png" alt="no hay" />
      <div className="description">
        <h4>Puxada frontal</h4>
        <p>3 series x 12 repeticoes</p>
      </div>
      <button className="botonVector">
        <img src="../public/imagen1.png" alt="no hay" />
      </button>
    </div>
  );
};

export default Ejercicios;
