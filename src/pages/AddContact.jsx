import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";

function AddContact() {
  const { addContact } = useContact();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-title">
              <strong>Add New Contact</strong>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">First Name</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Last Name</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Email</label>
                  <div className="col-md-9">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Phone</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Address</label>
                  <div className="col-md-9">
                    <textarea
                      name="address"
                      rows="3"
                      className="form-control"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <hr />

                <div className="form-group row mb-0">
                  <div className="col-md-9 offset-md-3">
                    <button type="submit" className="btn btn-primary me-2">
                      Save
                    </button>
                    <Link to="/" className="btn btn-outline-secondary">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;