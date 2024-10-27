interface IDatabase {
    connect();
    find();
    update();
}

class MySQLDatabase implements IDatabase {
    connect(): void {
        console.log("Conectándose a MySQL")
    }

    find() {
       console.log("Encontrando a MySQL") 
    }

    update() {
        console.log("Actializando a MySQL")
    }
}

class SQLiteDatabase implements IDatabase{
    connect(): void {
        console.log("Conectándose a SQL")
    }

    find() {
       console.log("Encontrando a SQL") 
    }

    update() {
        console.log("Actializando a SQL")
    }
}