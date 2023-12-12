import { redirect } from 'next/navigation'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'

export async function GET(request: Request) {
	const params = new URLSearchParams(request.url.split('?')[1])
	const code = params.get('code')

	if (!code) {
		redirect(
			`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http://localhost:3000/api/auth/google&client_id=${process.env.GOOGLE_ID}&scope=openid%20email%20profile`,
		)
	}
	const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
		},
		body: JSON.stringify({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			redirect_uri: 'http://localhost:3000/api/auth/google',
			code: code,
			grant_type: 'authorization_code',
		}),
	}).then((res) => res.json())

	if ('error' in tokenRes) return new Response(tokenRes.error_description, { status: 400 })

	if ('access_token' in tokenRes) {
		const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				authorization: `Bearer ${tokenRes.access_token}`,
			},
		}).then((res) => res.json())

		if ('error' in userRes) return new Response(userRes.error?.message, { status: 400 })

		let userDB = await User.findOne({ email: userRes.email })

		if (userDB && userDB.provider !== 'google') {
			return new Response(
				'The "email" linked with this Google account is already registered with another application.',
				{ status: 400 },
			)
		}

		if (!userDB) {
			userDB = await User.create({
				email: userRes.email,
				name: userRes.name,
				provider: 'google',
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
}
