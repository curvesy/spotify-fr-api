import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"
import prisma from "./prisma"

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (token) {
      let user
    }
  }
}
