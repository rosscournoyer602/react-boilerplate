import React, { useCallback, useEffect } from 'react'
import { withRouter } from 'react-router'
import { useGlobalContext } from '../../../store/global'


const SignIn = (props) => {
	const {
		userAuthed,
		login,
		openModal,

	} = useGlobalContext()

	const handleLogin = useCallback((e) => {
		if (e) {
			e.preventDefault()
		}

		const email = document.getElementById('id').value
		const password = document.getElementById('password').value
		if (!email) {
			openModal('Missing id')
			return
		}
		if (!password) {
			openModal('Missing password')
			return
		}
		// call some login function
		login(email, password)
	}, [login])

	useEffect(() => {
		const submitOnEnter = (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				handleLogin()
			}
		}

		const form = document.getElementById('signin')
		form.addEventListener('keypress', submitOnEnter)
		return () => {
			form.removeEventListener('keypress', submitOnEnter)
		};
	}, [handleLogin, ])

	useEffect(() => {
		if (userAuthed) {
			props.history.push('/')
		}
	}, [userAuthed, props.history])


	
	return (
		<form id="signin">
			<div>
				<input id="id" type="text" placeholder="id" />
			</div>
			<div>
				<input id="password" placeholder="password" type="password" />
			</div>
			<button onClick={handleLogin}>Submit</button>
		</form>
	)
}

export default withRouter(SignIn)
