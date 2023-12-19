'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
	const [firstRender, setFirstRender] = useState(true)
	const [token, setToken] = useState('')

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false)
		} else {
			if (typeof window !== 'undefined') {
				setToken(window.localStorage.getItem('token') as string)
			}
		}
	}, [firstRender])

	if (token === null) {
		redirect('/login')
	}

	if (token === '') {
		return (
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="description" content="Generate webapps with images." />
					<title>Playground Berlin AI</title>
				</head>
				<div className="w-full h-screen grid place-items-center">
					<div className="loader"></div>
				</div>
			</html>
		)
	}

	return <>{children}</>
}
