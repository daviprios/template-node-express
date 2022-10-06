import zod from 'zod'

import inputValidator from '$middlewares/inputValidator'

class UserValidator {
  static get create () {
    return inputValidator(zod.object({
      body: zod.object({
        login: zod.string().email(),
        password: zod.string()
      })
    }))
  }
}

export default UserValidator