interface IUser{
    id:number;
    nombre:string;
    edad:number;
}

interface IAdmin extends IUser{
    cargo:string;
    sueldo:number;
}

function imprimirDatos(usuario: IUser | IAdmin){
    console.log(`Señor usuario su id es ${usuario.id}`)
    console.log(`Señor usuario su nombre es ${usuario.nombre}`)
    console.log(`Señor usuario su edad es ${usuario.edad}`)

    if ("cargo" in usuario && "sueldo" in usuario){
        console.log(`Señor usuario su cargo es ${usuario.cargo}`)
        console.log(`Señor usuario su sueldo es ${usuario.sueldo}`)
    }
}

    