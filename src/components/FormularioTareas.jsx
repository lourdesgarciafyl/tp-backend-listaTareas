import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultarCrearTarea, consultarListaTareas } from "../helpers/queries";
import { useForm } from "react-hook-form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [tareas, setTareas] = useState([])

    const onSubmit = (tareaNueva) =>{
        consultarCrearTarea(tareaNueva).then((respuesta) =>{
            if(respuesta && respuesta.status === 201){
                Swal.fire(`Tarea agregada`, `La tarea fue agregada`, `success`)
                reset()           
            }else{
                Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`)
            }    
        })
    }
    return (
        <section>
        <Form onSubmit={handleSubmit(onSubmit)}> 
                {/* funcion sin parentesis, en caso de que si invocar la funcion como anonima y ahi poner los parametros () => handleSubmit(parametro) */}
            <Form.Group  className="mb-3 d-flex" controlId="tarea">
                <Form.Control 
                type="text" 
                placeholder="Ingrese una tarea"
                {... register("nombreTarea", {
                    required: "Debe ingresar una tarea",
                    minLength:{
                        value: 3,
                        message: "Cantidad minima de caracteres: 3"
                      },
                      maxLength:{
                        value: 100,
                        message: "Cantidad maxima de caracteres: 100"
                      }
                })}/>
                <Form.Text className="text-danger">{errors.nombreTarea?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className="ms-1">Agregar
            </Button>
        </Form>
        <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
    </section>
    )
}

export default FormularioTareas;