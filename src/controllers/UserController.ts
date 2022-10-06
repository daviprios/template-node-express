import { Request, Response } from 'express'

import CreateUser from '$database/queries/User/CreateUser'
import FindUser from '$database/queries/User/FindUser'

class UserController {
	static async create(req: Request, res: Response) {
		if (await FindUser({ login: req.body.login }))
			return res.status(409).json({
				messsage: 'User already exists',
			})

		const user = await CreateUser({
			data: {
				login: req.body.login,
				password: req.body.password,
			},
		})

		if (!user)
			return res.status(500).json({
				messsage: 'Couldnt create user',
			})

		return res.status(201).json({
			message: 'User Successfully created',
			data: {
				login: req.body.login,
			},
		})
	}
}

export default UserController
