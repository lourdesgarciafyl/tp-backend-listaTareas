import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";
const ListaTareas = () => {
    return (
        <ListGroup>
            <ItemTarea tarea='Planificar'></ItemTarea>
            <ItemTarea tarea='Maquetar'></ItemTarea>
            <ItemTarea tarea='Codear'></ItemTarea>
        </ListGroup>
    );
};

export default ListaTareas;