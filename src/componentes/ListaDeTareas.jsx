import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheets/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      /*Verificamos que la cadena no este vacia */
      tarea.texto = tarea.texto.trim(); /*Le quitamos cualquier espacio */
      const tareasActualizadas = [
        tarea,
        ...tareas,
      ]; /*Generamos un arreglo con la tarea nueva, y las tareas anteriores */
      setTareas(tareasActualizadas); /*Y por ultimo, actualizamos el estado */
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      {" "}
      {/* Fragmento */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {/* RENDERIZAR UNA LISTA DE COMPONENTES, se va actualizar un componente por cada elemento tarea en el array */}
        {tareas.map((tarea) => (
          <Tarea
            key={
              tarea.id
            } /*Si o si hay que incluir la key cuando mapeamos una lista */
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
