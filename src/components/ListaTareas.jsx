import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
import { useState, useEffect } from "react";
import { consultarListaTareas } from "../helpers/queries";

const ListaTareas = ({tareas, setTareas}) => {
    
    return (
        <ListGroup>
            {tareas.map((tarea) => 
             <ItemTarea key={tarea.id} tarea={tarea} setTareas={setTareas}></ItemTarea>
            )}
        </ListGroup>
    );
};

export default ListaTareas;