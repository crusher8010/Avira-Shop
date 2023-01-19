import AdminNavbar from "./AdminNavbar";
import Graph from "./Graph";
import "./AdminNavbar.css";

function AdminDashboard() {

    return (
        <>
            <AdminNavbar />
            <Graph />
            <br />
            <hr />
            <div className="partTwo">
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default AdminDashboard;