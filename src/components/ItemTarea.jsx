import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, funcionBorrarParaItem }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea}
        <Button variant="danger" onClick={() => funcionBorrarParaItem(tarea)}>Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;