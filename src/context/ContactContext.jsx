import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("default");

  const [selectedContact, setSelectedContact] = useState(null);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    } finally {
      setLoading(false);
    }
  };

  const addContact = async (contactData) => {
    try {
      const newContact = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      await api.post("/contacts", newContact);
      fetchContacts();
    } catch (error) {
      console.error("Failed to add contact", error);
    }
  };

  const updateContact = async (id, updatedData) => {
    try {
      const oldContact = contacts.find((c) => c.id === id);
      await api.put(`/contacts/${id}`, {
        ...oldContact,
        ...updatedData,
      });
      fetchContacts();
    } catch (error) {
      console.error("Failed to update contact", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Failed to delete contact", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts
    .filter((contact) => {
      const search = searchTerm.toLowerCase();
      return (
        contact.first_name.toLowerCase().includes(search) ||
        contact.last_name.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search) ||
        contact.phone.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (filterType === "first_name") {
        return a.first_name.localeCompare(b.first_name);
      }
      if (filterType === "last_name") {
        return a.last_name.localeCompare(b.last_name);
      }
      if (filterType === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return 0;
    });

  return (
    <ContactContext.Provider
      value={{
        contacts,
        loading,
        fetchContacts,
        addContact,
        updateContact,
        deleteContact,
        searchTerm,
        setSearchTerm,
        filterType,
        setFilterType,
        filteredContacts,
        selectedContact,
        setSelectedContact,
        showDetailsModal,
        setShowDetailsModal,
        showEditModal,
        setShowEditModal,
        showDeleteModal,
        setShowDeleteModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);