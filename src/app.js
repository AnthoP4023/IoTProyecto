import express from 'express'
import cors from 'cors'
import resultadosRoutes from './routes/resultados.Routes.js'


const app=express();
const corsOptions={
    origin:'*',//la direccion ip del servidor
    methods:['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    cedentials:true
}
app.use(cors(corsOptions));
app.use(express.json());//para que interprete los objetos json
//rutas
app.use('/api', resultadosRoutes)
app.use((req,res,next)=>{
    res.status(400).json({
        message:'Endpoint not found'
    })
})
export default app;