import createContextStore from './hooks/createContextStore'
// import http from '../utils/axios'
// import queryString from 'query-string'

const initialState = {
	userAuthed: false,
	modalOpen: false,
	canCloseModal: true,
	modalText: '',
	loading: false
}

const [GlobalProvider, useGlobalContext] = createContextStore(
  ({ state, setState }) => {

		const logout = () => {
			localStorage.removeItem('id')
			localStorage.removeItem('token')
			setState({
				userAuthed: false
			})
		}

		const login = async (id, password) => {
			try {
				setLoading(true)
				setTimeout(() => {
					setState({
						userAuthed: true
					})
					setLoading(false)
				}, 2000)
			} catch (e) {
				setLoading(false)
				console.error(e)
			}
		}

		const openModal = (text, canClose = true) => {
			document.body.classList.add('noscroll')
			setState({
				modalOpen: true,
				modalText: text,
				canCloseModal: canClose
			})
		}

		const closeModal = () => {
			document.body.classList.remove('noscroll')
			setState({
				modalOpen: false,
				modalText: '',
				canCloseModal: true
			})
		}

		const setLoading = (bool) => {
			setState({
				loading: bool
			})
		}

    return {
			role: state.role,
			userAuthed: state.userAuthed,
			login,
			logout,
			openModal,
			closeModal,
			modalOpen: state.modalOpen,
			modalText: state.modalText,
			canCloseModal: state.canCloseModal,
			name: state.name,
			email: state.email,
			loading: state.loading,
			setLoading
    }
  },
  initialState
)

export { GlobalProvider, useGlobalContext }
