interface IVehicle{
    model:string;
    year:number;
    color:string;
}

interface ICar extends IVehicle{
    potencia:number;
    precio:number;
}

interface IMotorcycle extends IVehicle{
    velocidadMax: number;
    precio:number;
}


class car implements ICar{
    model: string;
    year:number;
    color: string;
    potencia: number;
    precio: number;
}

class motorcycle implements IMotorcycle{
    model: string;
    year: number;
    color: string;
    velocidadMax: number;
    precio: number;
}
