'use client'

import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export const metadata: Metadata = {
	title: 'Login In',
}

export default function LoginVerification() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const token = params.get('token')

		if (!window.opener) return redirect('/')

		if (window.opener && token) {
			window.opener.postMessage({ token })
			window.close()
		} else {
			window.opener.postMessage('error')
			window.close()
		}
	}, [])
	return (
		<div className="w-full h-screen grid place-items-center">
			<div className="loader"></div>
		</div>
	)
}
