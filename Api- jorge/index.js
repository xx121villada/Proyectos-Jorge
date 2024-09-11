import express from 'express'
//manipulacion de archivos
import fs from 'fs'
//Tipo json
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Bienvenido a mi API ")
})

const readData = () => {
    try{
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    }catch (error){
        console.log(error)
    }
}

const writeData = (data) => {
    try{
        fs.writeFileSync("./db.json", JSON.stringify(data))
    }catch (error){
        console.log(error)
    }
}

//GET sirve para obtenr un recurso
app.get("/libros", (req,res) => {
    const data = readData(); 
    res.send(data)
})

//GET para un recurso especifico
app.get("/libros/:id", (req,res) => {
    const data = readData(); 
    const id = parseInt(req.params.id)
    const book = data.books.find((book) => book.id ===id)
    res.send(book)
})

//POST agregar un recurso
app.post("/crear",(req,res) => {
    const data= readData()
    const body = req.body
    const newBook = {
        id : data.books.length +1, 
        ...body,
    }
    data.books.push(newBook)
    writeData(data)
    res.json(newBook)
})

//PUT actualizar un recurso 
app.put("/actualizar/:id", (req,res) => {
    const data = readData()
    const body = req.body
    const id = parseInt(req.params.id)
    const bookIndex = data.books.findIndex((book) => book.id ===id)
    data.books[bookIndex]={
        ...data.books[bookIndex],
        ...body
    }
    writeData(data)
    res.json({mensaje: "El libro se actualizo correctamente"})
})

//Delete eliminar un recurso
app.delete("/eliminar/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id, 10);
    const bookIndex = data.books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
        data.books.splice(bookIndex, 1);
        writeData(data);
        res.json({ mensaje: "El libro se elimino correctamente" });
    } else {
        res.json({ mensaje: "Libro no encontrado" });
    }
});
app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000")
})