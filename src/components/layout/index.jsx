import React from 'react'
import { withRouter } from 'react-router'
import Rotate from './rotate'
import Loader from './loader'

const Layout = (props) => {
	return (
		<>
			<div className="layout">
				{props.children}
				<Loader />
			</div>
			<Rotate />
		</>
	)
}

export default withRouter(Layout)