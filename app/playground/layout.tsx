'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

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
			<div className="w-full h-screen grid place-items-center">
				<div className="loader"></div>
			</div>
		)
	}

	return (
		<>
			<Header />
			{children}
		</>
	)
}
