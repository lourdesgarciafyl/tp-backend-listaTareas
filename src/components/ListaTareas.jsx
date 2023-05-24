import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas}) => {
    return (
        <ListGroup>
            {arrayTareas.map((item, indiceTarea) => (
             <ItemTarea tarea={item} key={indiceTarea}></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;