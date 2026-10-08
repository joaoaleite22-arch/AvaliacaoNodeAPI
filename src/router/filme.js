import express from "express"
import ControllerFilme  from '../controller/filme.js'

const router = express.Router()

router.get("/buscar", ControllerFilme  .Buscar)
router.get("/buscarUm/:id", ControllerFilme.BuscarUm)
router.get("/buscarClasse/ :classificacao", ControllerFilme.BuscarClasse)
router.post("/criar", ControllerFilme .Criar)
router.put("/alterar/:id", ControllerFilme.Alterar)
router.put("/alterar/id", ControllerFilme.AlterarStatus)
router.delete("/deletar/:id", ControllerFilme .Deletar)

export default router