import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas, setTareas}) => {
    
    return (
        <ListGroup>
            {tareas.map((tarea) => 
             <ItemTarea key={tarea._id} tarea={tarea} setTareas={setTareas}></ItemTarea>
            )}
        </ListGroup>
    );
};

export default ListaTareas;