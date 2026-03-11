import { useContact } from "../context/ContactContext";
import ContactRow from "./ContactRow";

function ContactTable() {
  const { filteredContacts, loading } = useContact();

  if (loading) {
    return <h5 className="text-center py-4">Loading...</h5>;
  }

  if (filteredContacts.length === 0) {
    return <h4 className="text-center py-4">No Contact Information</h4>;
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map((contact, index) => (
          <ContactRow key={contact.id} contact={contact} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;