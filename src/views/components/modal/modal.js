import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCloseCircle as CloseIcon } from 'react-icons/ai'
import './modal.scss'

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none'
	
	return (
		<div className={showHideClassName}>
			<div className='modal-container'>
				{children}
				<CloseIcon 
					className='close-button'
					onClick={handleClose}
					size={26}
				/>
			</div>
	  </div>
	)
}

Modal.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.bool,
	children: PropTypes.func

}

export default Modal