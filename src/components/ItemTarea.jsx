import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, funcionBorrarParaItem }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between  mb-2 pt-3">
        {tarea}
        <Button className="pt-1" variant="danger" onClick={() => funcionBorrarParaItem(tarea)}>Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;