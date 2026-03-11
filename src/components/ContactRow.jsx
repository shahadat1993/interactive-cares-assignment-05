import { useContact } from "../context/ContactContext";

function ContactRow({ contact, index }) {
  const {
    setSelectedContact,
    setShowDetailsModal,
    setShowEditModal,
    setShowDeleteModal,
  } = useContact();

  const handleShow = () => {
    setSelectedContact(contact);
    setShowDetailsModal(true);
  };

  const handleEdit = () => {
    setSelectedContact(contact);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setSelectedContact(contact);
    setShowDeleteModal(true);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td width="150">
        <button
          className="btn btn-sm btn-circle btn-outline-info me-2"
          title="Show"
          onClick={handleShow}
        >
          <i className="fa fa-eye"></i>
        </button>
        <button
          className="btn btn-sm btn-circle btn-outline-secondary me-2"
          title="Edit"
          onClick={handleEdit}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="btn btn-sm btn-circle btn-outline-danger"
          title="Delete"
          onClick={handleDelete}
        >
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
}

export default ContactRow;