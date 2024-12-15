import React, { useEffect, useState } from 'react'

import Modal from 'react-modal'

import CloseIcon from '../../assets/icons/close'


Modal.setAppElement('#root')
// Modal.setAppElement('body')

const CommonModal = ({
  open = false,
  children,
  onCloseModal,
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEsc = false,
  hideCloseButton = false
}) => {
    console.log('in cus modal');
    
  const [isOpen, setIsOpen] = useState(open)

  const handleClose = () => {
    setIsOpen(false)
    onCloseModal(false)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="customModal"
      className="customModal"
      overlayClassName="modalOverlay"
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
    >
      {!hideCloseButton && (
        <button type="button" className="modalButton" onClick={handleClose}>
          <CloseIcon />
        </button>
      )}
      {children}
    </Modal>
  )
}

export default CommonModal
