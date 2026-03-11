import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ContactTable from "../components/ContactTable";
import ShowContactModal from "../components/ShowContactModal";
import EditContactModal from "../components/EditContactModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-title">
              <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <h2 className="mb-0">All Contacts</h2>

                <SearchBar />

                <div>
                  <Link to="/add-contact" className="btn btn-success">
                    <i className="fa fa-plus-circle"></i> Add New
                  </Link>
                </div>
              </div>
            </div>

            <FilterBar />

            <div className="card-body">
              <ContactTable />
            </div>
          </div>
        </div>
      </div>

      <ShowContactModal />
      <EditContactModal />
      <DeleteConfirmModal />
    </div>
  );
}

export default Home;