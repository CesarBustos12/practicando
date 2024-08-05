import { useState, useEffect } from "react"

const component = () => {
    //En el use state tenemos el valor inicial, el valor y la forma de actualizar el estado
    const [value, setValue] = useState(false)

    //Tenemos una funcion que recibe 2 parametros que es el codigo a ejecutar y una lista de dependencias
    useEffect(() => { 
        console.log('el codigo a ejecutar')

    }, listOfDependencies)
}