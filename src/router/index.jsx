import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routes from './routes'
import Layout from '../components/layout'
import Auth from '../components/pages/auth'
import Modal from '../components/ui/modal'
import Terms from '../components/pages/terms'
import { preloadAll } from '../utils/preload'
import { useGlobalContext } from '../store/global'
import '../styles/index.scss'

const ProtectedRoute = ({ isAllowed, ...props }) => {
	return isAllowed ? <Route {...props} /> : <Redirect to="/auth" />
};

const assets = []

const AppRouter = (props) => {
	const {
		userAuthed,
		modalOpen,
		modalText,
		canCloseModal,
		closeModal,
		setLoading,
		loading
	} = useGlobalContext()

	// useEffect(() => {
	// 	async function load() {
	// 		setLoading(true)
	// 		await preloadAll(assets);
	// 		if (loading) {
	// 			setLoading(false)
	// 		}
	// 	};
	// 	load()
	// // eslint-disable-next-line
	// }, [])
	
	return (
		<Router>
			<Layout>
				{modalOpen &&
					<Modal text={modalText} closeModal={canCloseModal ? closeModal : null} />
				}
				<Switch>
					<Route path="/auth" component={Auth} />
					<Route path="/terms" component={Terms} />
					{routes.map((r, i) => (
						<ProtectedRoute 
							path={r.path}
							component={r.component}
							exact={r.exact}
							key={r.path || i}
							render={r.render}
							isAllowed={userAuthed}
						/>
					))}
				</Switch>
			</Layout>
		</Router>
	)
}

export default AppRouter