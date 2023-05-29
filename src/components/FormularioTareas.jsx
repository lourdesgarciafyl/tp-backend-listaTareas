import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
    // comenzar por guardar en el local storage
    let tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState(tareasLocalStorage);
    
    useEffect(() => {
        localStorage.setItem("listaTareas", JSON.stringify(tareas))
        // si uso solo la funcion, me interesa el montaje y actualizaicon de TODOS los state
        //si quiero decir que siempre funcione en montaje y en la actualizacion de ALGUNOS states, debo agregar al final de la funcion ", y el otro elemento"
    }, [tareas])
    // aqui arriba le digo: solo me interesa los cambios que hay en tareas, no en el array tarea (auqi puedo incluir tantos state como quiera)
    // otra version del useEffect: despues de la funcion, incluir ", []" indicando que me importa solo el MONTAJE, ninguna actualizacion de ningun state
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea(``)
    }

    const borrarTarea = (nombreTarea) => {
        let copiaArrayTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea)        
        setTareas(copiaArrayTareas);
    }

    return (
        <section>
        <Form onSubmit={handleSubmit}> 
                {/* funcion sin parentesis, en caso de que si invocar la funcion como anonima y ahi poner los parametros () => handleSubmit(parametro) */}
            <Form.Group  className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
                <Button variant="primary" type="submit" className="ms-1">Enviar
                </Button>
            </Form.Group>
        </Form>
        <ListaTareas arrayTareas={tareas} funcionBorrar={borrarTarea}></ListaTareas>
    </section>
    )
}

export default FormularioTareas;