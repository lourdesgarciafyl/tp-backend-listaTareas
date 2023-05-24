import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

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
        <ListaTareas></ListaTareas>
    </section>
    )
}

export default FormularioTareas;