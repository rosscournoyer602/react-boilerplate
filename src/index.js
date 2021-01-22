import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import { GlobalProvider } from './store/global'

ReactDOM.render(
	<GlobalProvider>
		<AppRouter />
	</GlobalProvider>,
  document.getElementById('root')
)