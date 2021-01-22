import React, { useEffect } from 'react'
import Wrapper from '../pages/wrapper'
import { useGlobalContext } from '../../store/global'

const Loader = () => {
	const { loading } = useGlobalContext()
	console.log('LOADING', loading)
	useEffect(() => {
		document.body.classList.toggle('noscroll')
		return () => {
			document.body.classList.remove('noscroll')
		};
	}, [])

	return (
		<>
			{ loading &&
				<Wrapper>
					<div className="loader-container noscroll">
					<div className="loader">
						LOADING
					</div>
					</div>
				</Wrapper>
			}
		</>
	)
}

export default Loader;