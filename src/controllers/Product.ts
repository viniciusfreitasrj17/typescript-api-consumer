import { Request, Response } from "express";
import api from "../api";

const index = async (req: Request, res: Response): Promise<Response> => {
  try {
    const _id = req.params.id
    const { data } = await api.get(`/${_id}`)

    return res.status(200).json({ data })
  } catch (error) {
    console.log({ error })
    return res.status(400).json({ error: 500 })
  }
}

export {
  index,
}
