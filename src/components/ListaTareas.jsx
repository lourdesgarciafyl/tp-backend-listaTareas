import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas, funcionBorrar}) => {
    return (
        <ListGroup>
            {arrayTareas.map((item, indiceTarea) => (
             <ItemTarea tarea={item} key={indiceTarea} funcionBorrarParaItem={funcionBorrar}></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;