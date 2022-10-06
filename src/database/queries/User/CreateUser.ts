import prisma from '$database/prisma'

import { User } from 'src/models/UserModel'

const CreateUser = async ({ data }: { data: User }) => {
  return await prisma.user.create({
    data,
  })
}

export default CreateUser