import {Router, Request, Response} from "express";

const router = Router();

router.get("/", (req: Request , res: Response) =>{
    res.json({
        status: "200",
        msg: "Todo melo caramelo"
    })
})

router.post("/", (req: Request , res: Response) =>{
    const {asunto} = req.body;
    const {mensaje} = req.body;
    
    res.json({
        asunto,
        mensaje
    })
})

router.post("/:id", (req: Request , res: Response) =>{
    const {asunto} = req.body;
    const {mensaje} = req.body;
    const {id} = req.params;
    
    res.json({
        asunto,
        mensaje,
        idCapturada: id
    })
})

export default router;