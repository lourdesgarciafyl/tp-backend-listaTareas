import { Button, ListGroup } from "react-bootstrap";
import { consultarBorrarTarea, consultarListaTareas } from "../helpers/queries";
import Swal from "sweetalert2";
const ItemTarea = ({tarea, setTareas}) => {
  
  const borrarTarea = () =>{
    Swal.fire({
      title: `¿Estás seguro de borrar la tarea ${tarea.nombreTarea}?`,
      text: "No se puede revertir esta paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
        consultarBorrarTarea(tarea.id).then((respuesta) =>{
          console.log(respuesta)
          if(respuesta.status === 200){
            Swal.fire(
              'Eliminado',
              `La tarea ${tarea.nombreTarea} fue eliminada`,
              'success'
            );
            consultarListaTareas().then((respuesta) => setTareas(respuesta))
          }else{
            Swal.fire(
              'Ocurrió un error',
              `La tarea ${tarea.nombreTarea} no pudo ser eliminada`,
              'success'
            )
          }
        })
      }
    })
  }
  
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between  mb-2 pt-3">
        {tarea.nombreTarea}
        <Button className="pt-1" variant="danger" onClick={borrarTarea}>Borrar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;