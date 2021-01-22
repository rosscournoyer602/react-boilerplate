import React from 'react'
import { withRouter } from 'react-router'
import Wrapper from '../../pages/wrapper'
import SignIn from './signIn'

const Auth = (props) => {
	return (
		<>
			<Wrapper>
				<SignIn />
			</Wrapper>
		</>
	)
}

export default withRouter(Auth)