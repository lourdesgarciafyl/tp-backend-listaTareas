import { Form, Button } from "react-bootstrap";

const FormularioTareas = () => {
    return (
        <section>
        <Form>
            <Form.Group  className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" />
                <Button variant="primary" type="submit" className="ms-1">Enviar
                </Button>
            </Form.Group>
        </Form>
    </section>
    )
}

export default FormularioTareas;