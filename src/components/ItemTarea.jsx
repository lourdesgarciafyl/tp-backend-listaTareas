import { Button, ListGroup } from "react-bootstrap";
import { consultarListaTareas, consultarBorrarTarea, consultarEditarTarea } from "../helpers/queries";
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
        consultarBorrarTarea(tarea._id).then((respuesta) =>{
          console.log(respuesta)
          if(respuesta.status === 200){
            Swal.fire(
              'Eliminado',
              `La tarea ${tarea.nombreTarea} fue eliminada`,
              'success'
            );
            consultarListaTareas().then((respuesta) => setTareas(respuesta))
          } else{
            Swal.fire(
              'Ocurrió un error',
              `La tarea ${tarea.nombreTarea} no pudo ser eliminada`,
              'error'
            )
          }
        })
      }
    })
  }
  
  const editarTarea = (id) => {
    console.log(id)
      Swal.fire({
          title: "Editar tarea",
          input: "text",
          inputValue: tarea.nombreTarea,
          showCancelButton: true,
          confirmButtonText: "Editar",
          showLoaderOnConfirm: true,
          preConfirm: (nombreNuevaTarea) => {
              const nuevaTarea = {
                  nombreTarea: nombreNuevaTarea,
              }
              return consultarEditarTarea(nuevaTarea, id)
          },
          allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire("Tarea editada", `La tarea fue editada correctamente`, "success")
              consultarListaTareas().then((respuesta) => setTareas(respuesta))
          }
      })
  }
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between  mb-2 pt-3">
        {tarea.nombreTarea}
        <div>
        <Button className="pt-1 me-1" variant="warning" onClick={() => editarTarea(tarea._id)}>Editar</Button>
        <Button className="pt-1" variant="danger" onClick={borrarTarea}>Borrar</Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;