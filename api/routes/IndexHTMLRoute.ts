import express from "express";
import { Request, Response } from "express";
import path from "path";


const router = express.Router();

router.get('/', (req: Request, res: Response) => { 

    res.sendFile(path.join(__dirname, '../public/index.html'))  

})
export { router as IndexHTMLRoute };