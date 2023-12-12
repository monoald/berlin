import { redirect } from 'next/navigation'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'

export async function GET(request: Request) {
	const params = new URLSearchParams(request.url.split('?')[1])
	const code = params.get('code')

	if (!code) {
		redirect(
			`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&scope=read%3Auser%20user%20user%3Aemail&redirect_uri=http://localhost:3000/api/auth/github`,
		)
	}
	const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		body: JSON.stringify({
			client_id: process.env.GITHUB_ID,
			client_secret: process.env.GITHUB_SECRET,
			code: code,
		}),
		headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
	}).then((res) => res.json())

	if ('error_description' in tokenRes) return new Response(tokenRes.error_description, { status: 400 })

	if ('access_token' in tokenRes) {
		const userRes = await fetch('https://api.github.com/user', {
			headers: {
				Authorization: `Bearer ${tokenRes.access_token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'Hono-Auth-App',
			},
		}).then((res) => res.json())

		if ('message' in userRes) return new Response(userRes.message, { status: 400 })

		let userDB = await User.findOne({ email: userRes.email })

		if (userDB && userDB.provider !== 'github') {
			return new Response(
				'The "email" linked whit this Github account is already registered with another application.',
				{ status: 400 },
			)
		}

		if (!userDB) {
			userDB = await User.create({
				email: userRes.email,
				name: userRes.name,
				provider: 'github',
			})
		}

		const token = jwt.sign(
			{
				id: userDB._id,
				email: userDB.email,
			},
			process.env.SECRET as string,
		)

		redirect(`/login-loader?token=${token}`)
	}

	return new Response('code', { status: 200 })
}
