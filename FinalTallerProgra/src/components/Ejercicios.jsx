import React from "react";
import "./Ejercicios.css";

const Ejercicios = () => {
  return (
    <>
      <div className="tarjetaEjercicios">
        <img src="../public/imagen1.png" alt="no hay" />
        <div className="description">
          <h4>Puxada frontal</h4>
          <p>3 series x 12 repeticoes</p>
        </div>
        <button className="botonVector">
          <img src="../public/Icons.png" alt="no hay" />
        </button>
      </div>
      <div className="tarjetaEjercicios">
        <img src="../public/imagen2.png" alt="no hay" />
        <div className="description">
          <h4>Remada curvada</h4>
          <p>3 series x 12 repeticoes</p>
        </div>
        <button className="botonVector">
          <img src="../public/Icons.png" alt="no hay" />
        </button>
      </div>
      <div className="tarjetaEjercicios">
        <img src="../public/imagen3.png" alt="no hay" />
        <div className="description">
          <h4>Remada unilateral</h4>
          <p>3 series x 12 repeticoes</p>
        </div>
        <button className="botonVector">
          <img src="../public/Icons.png" alt="no hay" />
        </button>
      </div>
      <div className="tarjetaEjercicios">
        <img src="../public/imagen4.png" alt="no hay" />
        <div className="description">
          <h4>Levantamiento terra</h4>
          <p>3 series x 12 repeticoes</p>
        </div>
        <button className="botonVector">
          <img src="../public/Icons.png" alt="no hay" />
        </button>
      </div>
    </>
  );
};

export default Ejercicios;
