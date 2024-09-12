import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(
      e.target.value
    ); /* actualiza el estado del input extraer el valor del campo de texto */
  };

  const manejarEnvio = (e) => {
    {
      /*Manejar el envio para que no se vuelva a cargar la pag cuendo agreguemos la tarea*/
    }
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4() /*Genera id unicos */,
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      ></input>{" "}
      {/* Cuando ocurra con cambio se llama a la funcion con onChange para saber que el usuario
        realizo un cambio en el input */}
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
