import React from 'react'
import { useGlobalContext } from '../../../store/global'
const Modal = (props) => {
	const { canCloseModal } = useGlobalContext()
	return (
		<>
			<div className={`modal-overlay ${props.noClick ? 'no-click' : ''}`} />
			<div className="modal-window">
				{props.text &&
					<p className="modal-window__text" dangerouslySetInnerHTML={{ __html: `${props.text}`}} />
				}
				{props.closeModal && canCloseModal &&
					<button text="ok" onClick={props.closeModal || null}>OK</button>
				}
			</div>
		</>
	)
}

export default Modal