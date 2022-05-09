const express=require('express')
const app=express()

const http=require('http')
const server=http.createServer(app)

app.get('/', (req,res)=>{
   //res.send('<h1> Aplicación de CHAT </h1>')
  // console-log(_dirname)
  res.sendFile ( `${__dirname}/cliente/index.html`)
})

server.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000')
})
