interface IBaseObject{
    id:number;
}

interface Iuser extends IBaseObject{
    nombre:string;
}

interface IProduct extends IBaseObject{
    precio:string;
}


interface Iorder extends IBaseObject{
    tiempoEspera: number;
}


function imprimirDato <objeto extends IBaseObject> (objeto: objeto){
    console.log(`El id del objeto es ${objeto.id} `)

    if("nombre" in objeto){
        console.log (`El nombre del Usuario es ${objeto.nombre}`)
    }

    if("precio" in objeto){
        console.log (`El precio del objeto es ${objeto.precio}`)
    }

    if("tiempoEspera" in objeto){
        console.log (`El tiempo de espera es de ${objeto.tiempoEspera}`)
    }
}


