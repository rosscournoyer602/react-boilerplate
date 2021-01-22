import Home from '../components/pages/home'
import NotFound from '../components/pages/404'

export default [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		component: NotFound
	}
]