import jwt from 'jsonwebtoken'
import User from '../models/Users'
import Generation from '../models/Generations'

export async function POST(request: Request) {
	let token = request.headers.get('authentication') as string

	if (!token) {
		return new Response('Login to make this action', { status: 401 })
	}

	token = token.split(' ')[1]

	let response: Response

	// jwt.verify(token, process.env.SECRET as string, async function (error, decoded) {
	// 	if (error) {
	// 		response = new Response(JSON.stringify({ error: 'Missing or invalid token.' }), { status: 400 })
	// 		return
	// 	}

	// 	const { id } = decoded as { id: string }

	// 	console.log(id)

	// 	const userDB = await User.findById(id)

	// 	if (!userDB) {
	// 		response = new Response(JSON.stringify({ error: 'User does not exist.' }), { status: 400 })
	// 		return
	// 	}

	// 	const body = await request.json()

	// 	console.log(body)

	// 	const image = body.image
	// 	const code = body.code

	// 	const newGeneration = new Generation({
	// 		image,
	// 		code,
	// 		users: [userDB._id],
	// 	})
	// 	await newGeneration.save()

	// 	userDB.generations.push(newGeneration._id)
	// 	await userDB.save()

	// 	response = new Response(JSON.stringify({ message: 'Saved successfuly' }), { status: 201 })
	// })

	try {
		const decoded = jwt.verify(token, process.env.SECRET as string)
		const { id } = decoded as { id: string }

		const userDB = await User.findById(id)

		if (!userDB) {
			return new Response(JSON.stringify({ error: 'User does not exist.' }), { status: 400 })
		}

		const body = await request.json()

		const image = body.image
		const code = body.code

		const newGeneration = new Generation({
			image,
			code,
			users: [userDB._id],
		})
		await newGeneration.save()

		userDB.generations.push(newGeneration._id)
		await userDB.save()

		return new Response(JSON.stringify({ message: 'Saved successfuly' }), { status: 201 })
	} catch (error) {
		return new Response(JSON.stringify({ error }), { status: 400 })
	}
}
