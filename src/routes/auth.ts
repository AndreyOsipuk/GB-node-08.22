import express, { Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User } from "../models/users";
import { Token } from "../models/tokens";

const router = express.Router();

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export type SignUpBody = TypedRequestBody<{ email: string; password: string }>;

router
  .post("/signup", async (req: SignUpBody, res, next) => {
    await User.create(req.body, (err, newUser) => {
      if (err) next(err);
      const { _id, email } = newUser;
      res.status(201).send({ _id, email });
    });
  })
  .post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User or password is wrong" });
      return;
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      res.status(400).json({ message: "User or password is wrong" });
      return;
    }
    const data = {
      id: user._id,
      email: user.email,
    };
    const accessToken = jwt.sign(
      data,
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "1m" }
    );

    const refreshToken = jwt.sign(
      data,
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "1d" }
    );

    await Token.findOne({ email: user.email }).update({
      expiresIn: false,
    });

    await Token.create(
      {
        token: refreshToken,
        email: user.email,
      },
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json({ erro: true, message: "refresh token not be created" });
        }

        res.status(200).json({ accessToken, refreshToken });
      }
    );
  })
  .post("/token", async (req, res) => {
    const refreshToken = req.body.refreshToken;

    if (refreshToken) {
      const decode = jwt.decode(refreshToken);
      const expiresed = await Token.findOne({
        token: refreshToken,
        expiresIn: true,
      });

      if (expiresed) {
        const accessToken = jwt.sign(
          //@ts-ignore
          { id: decode?.id, email: decode?.email },
          process.env.ACCESS_TOKEN_SECRET as string
        );

        res.status(200).json({ accessToken });
      } else {
        res.status(401).json({ error: true, message: "Unauthorized access" });
      }
    }
  });

export default router;
