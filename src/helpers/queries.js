const URLTareas = import.meta.env.VITE_API_TAREAS

export const consultarListaTareas = async () =>{
    try{
        const respuesta = await fetch(URLTareas)
        const listaTareas = await respuesta.json()
        return listaTareas
    }catch(error){
        console.log(error)
        return null
    }
}

export const consultarTarea = async (id) =>{
    try{
        const respuesta = await fetch(URLTareas`/${id}`);
        const tarea = await respuesta.json()
        return tarea
    }catch(error){
        console.log(error)
        return null 
    }
}

export const consultarCrearTarea = async (tarea) => {
    try{
        const respuesta = await fetch(URLTareas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        return respuesta
    }catch(error){
        console.log(error)
        return null 
    }
}

export const consultarBorrarTarea = async (id) =>{
    try{
        const respuesta = await fetch(`${URLTareas}/${id}`, {
            method: "DELETE"
        })
        return respuesta
    }catch(error){
        console.log(error)
        return null
    }
}

export const consultarEditarTarea = async (tarea, id) => {
    try {
        const respuesta = await fetch(URLTareas`/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta
    } catch (error) {
        console.log(error)
        return null
    }
}