import { Router } from 'express'
import {getResultados, postResultados} from '../controladores/resultados.Ctrl.js'
const router=Router()
// armar nuestras rutas
router.get('/resultados', getResultados) //select
router.post('/resultados', postResultados) //insert

export default router 