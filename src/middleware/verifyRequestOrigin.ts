import { NextFunction,Request,Response } from "express";
import { whiteList as allowedOrigins } from "../config/allowedOrigins";


export const verifyOrigins = (req: Request, res: Response, next: NextFunction) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) res.set('Access-Control-Allow-Origin', origin);
	next();
}
