import { Prisma } from '@prisma/client'

import prisma from '$database/prisma'

const FindUser = async (where: Prisma.UserWhereInput) => {
	try {
		return await prisma.user.findFirstOrThrow({ where })
	} catch (err) {
		return null
	}
}

export default FindUser
