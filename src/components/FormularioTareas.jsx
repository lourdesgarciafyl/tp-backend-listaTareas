import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {

    return (
        <section>
        <Form> 
                {/* funcion sin parentesis, en caso de que si invocar la funcion como anonima y ahi poner los parametros () => handleSubmit(parametro) */}
            <Form.Group  className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea"/>
                <Button variant="primary" type="submit" className="ms-1">Enviar
                </Button>
            </Form.Group>
        </Form>
        <ListaTareas></ListaTareas>
    </section>
    )
}

export default FormularioTareas;