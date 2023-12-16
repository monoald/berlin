import jwt from 'jsonwebtoken'
import User from '../../models/Users'

export async function GET(request: Request) {
	let token = request.headers.get('authentication') as string

	if (!token) {
		return new Response('Login to make this action', { status: 401 })
	}

	token = token.split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.SECRET as string)
		const { id } = decoded as { id: string }

		const userDB = await User.findById(id)

		if (!userDB) {
			return new Response(JSON.stringify({ error: 'User does not exist.' }), { status: 404 })
		}

		return new Response(
			JSON.stringify({
				id: userDB._id,
				credits: userDB.credits,
				subscription: userDB.subscription,
			}),
			{ status: 200 },
		)
	} catch (error) {
		return new Response(JSON.stringify({ error }), { status: 400 })
	}
}
