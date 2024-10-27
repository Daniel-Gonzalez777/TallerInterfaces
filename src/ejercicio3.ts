interface IProduct{
    name:string;
    price:number;
}

interface IInventory{
    producto: IProduct[]   
}


function agregarProducto (inventario: IInventory, producto: IProduct){
    inventario.producto.push(producto);
}


function buscarProducto (inventario: IInventory, nombre: string){
    return inventario.producto.find(producto => producto.name === nombre)
}


