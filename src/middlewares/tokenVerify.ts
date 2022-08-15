import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-access-token"] as string;

  if (token) {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
      (err, decoded) => {
        if (err) {
          console.log('err token', err)
          return res
            .status(401)
            .json({ error: true, message: "Unauthorized access" });
        }

        //@ts-ignore
        req.decoded = decoded;
        next();
      }
    );
  } else {
    return res.status(403).json({ error: true, message: "No token provided" });
  }
};
