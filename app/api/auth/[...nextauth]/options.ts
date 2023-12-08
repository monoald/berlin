import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

export const options = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			profile(profile) {
				return {
					...profile,
					id: profile.sub,
				}
			},
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID as string,
			clientSecret: process.env.TWITTER_SECRET as string,
			version: '2.0',
		}),
	],
	// callback: {
	//   async jwt({ token, user }) {
	//     if(user) token.role = user.role
	//   }
	// }
}
