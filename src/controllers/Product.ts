import { Request, Response } from "express";
import  qs from 'qs';
import api from "../api";

const show = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body } = req
    let parseBody = qs.stringify(body);
    const { data } = await api.post(`/`, parseBody)

    return res.status(200).json({ data })
  } catch (error) {
    console.log({ error })
    return res.status(500).json({ error: 500 })
  }
}

export {
  show,
}
