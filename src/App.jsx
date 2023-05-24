import { Container } from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <>
    <Container className='my-4 containerPrincipal'>
      <h1 className='display-2 text-center'>Lista de tareas</h1>
      <hr />
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
