import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
    const [tarea, setTarea] = useState(``);
    const [tareas, setTareas] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section>
        <Form onSubmit={handleSubmit}> 
                {/* funcion sin parentesis */}
            <Form.Group  className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
                <Button variant="primary" type="submit" className="ms-1">Enviar
                </Button>
            </Form.Group>
        </Form>
        <ListaTareas></ListaTareas>
    </section>
    )
}

export default FormularioTareas;