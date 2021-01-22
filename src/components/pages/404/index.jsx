import React from 'react'
import { withRouter } from 'react-router'
import Wrapper from '../../pages/wrapper'

const NotFound = (props) => {

	// const goBack = useCallback(() => {
	// 	props.history.goBack()
	// }, [props])

	return (
		<Wrapper>
			404 Not Found
		</Wrapper>
	)
}

export default withRouter(NotFound)