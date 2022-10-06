import { Router } from 'express'

import { paths } from 'src/util/paths'
import UserController from '$controllers/UserController'
import UserValidator from '$validators/UserValidator'

const UserRoutes = Router()

UserRoutes
  .post(paths.user, UserValidator.create, UserController.create)

export default UserRoutes