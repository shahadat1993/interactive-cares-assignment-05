import { Modal, Button } from "react-bootstrap";
import { useContact } from "../context/ContactContext";

function DeleteConfirmModal() {
  const {
    selectedContact,
    showDeleteModal,
    setShowDeleteModal,
    deleteContact,
  } = useContact();

  const handleDelete = async () => {
    await deleteContact(selectedContact.id);
    setShowDeleteModal(false);
  };

  if (!selectedContact) return null;

  return (
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{selectedContact.first_name}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Confirm Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteConfirmModal;