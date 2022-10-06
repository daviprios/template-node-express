import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodObject } from "zod";

const inputValidator = (mirror: ZodObject<{
  headers?: AnyZodObject
  body?: AnyZodObject
  query?: AnyZodObject
  params?: AnyZodObject
}>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const parseResult = mirror.safeParse(req)
    if(parseResult.success) next()
    res.status(400).json(parseResult)
  }
}

export default inputValidator