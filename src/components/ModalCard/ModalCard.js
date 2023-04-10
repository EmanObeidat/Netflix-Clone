import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default  function ModalCard (props){
    return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <img src={props.data.image} alt={props.data.title}/>
        <Modal.Body>{props.data.summary}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}