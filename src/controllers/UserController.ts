import CreateUser from '$database/queries/User/CreateUser'
import { Request, Response } from 'express'

class UserController {
  static async create (req: Request, res: Response) {
    const user = await CreateUser({
      data: {
        login: req.body.login,
        password: req.body.password,
      }
    })

    if(!user) return res.status(500).json({
      messsage: 'Couldnt create user'
    })

    res.status(201).json({
      message: 'User Successfully created',
      data: {
        login: req.body.login
      }
    })
  }
}

export default UserController