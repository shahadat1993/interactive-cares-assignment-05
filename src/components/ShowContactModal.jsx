import { Modal } from "react-bootstrap";
import { useContact } from "../context/ContactContext";

function ShowContactModal() {
  const {
    selectedContact,
    showDetailsModal,
    setShowDetailsModal,
    setShowEditModal,
    setShowDeleteModal,
  } = useContact();

  if (!selectedContact) return null;

  const handleEdit = () => {
    setShowDetailsModal(false);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setShowDetailsModal(false);
    setShowDeleteModal(true);
  };

  return (
    <Modal
      show={showDetailsModal}
      onHide={() => setShowDetailsModal(false)}
      centered
      size="lg"
    >
      <div className="card m-0 border-0">
        <div className="card-header card-title">
          <strong>Contact Details</strong>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group row mb-3">
                <label
                  htmlFor="first_name"
                  className="col-md-3 col-form-label"
                >
                  First Name
                </label>
                <div className="col-md-9">
                  <p className="form-control-plaintext text-muted">
                    {selectedContact.first_name}
                  </p>
                </div>
              </div>

              <div className="form-group row mb-3">
                <label
                  htmlFor="last_name"
                  className="col-md-3 col-form-label"
                >
                  Last Name
                </label>
                <div className="col-md-9">
                  <p className="form-control-plaintext text-muted">
                    {selectedContact.last_name}
                  </p>
                </div>
              </div>

              <div className="form-group row mb-3">
                <label htmlFor="email" className="col-md-3 col-form-label">
                  Email
                </label>
                <div className="col-md-9">
                  <p className="form-control-plaintext text-muted">
                    {selectedContact.email}
                  </p>
                </div>
              </div>

              <div className="form-group row mb-3">
                <label htmlFor="phone" className="col-md-3 col-form-label">
                  Phone
                </label>
                <div className="col-md-9">
                  <p className="form-control-plaintext text-muted">
                    {selectedContact.phone}
                  </p>
                </div>
              </div>

              <div className="form-group row mb-3">
                <label htmlFor="address" className="col-md-3 col-form-label">
                  Address
                </label>
                <div className="col-md-9">
                  <p className="form-control-plaintext text-muted">
                    {selectedContact.address || "N/A"}
                  </p>
                </div>
              </div>

              <hr />

              <div className="form-group row mb-0">
                <div className="col-md-9 offset-md-3">
                  <button
                    type="button"
                    className="btn btn-info me-2"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger me-2"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowDetailsModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ShowContactModal;