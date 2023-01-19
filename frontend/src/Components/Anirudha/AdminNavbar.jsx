import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { MdOutlineDashboard, MdDescription, MdLibraryAdd } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import "./AdminNavbar.css";

function AdminNavbar() {
    const [isMob, setIsMob] = useState(false);

    return (
        <nav className="adminNavbar">
            <img className="shopLogo" src={logo} alt="Shop logo" />
            <div className={isMob ? "nav-links-mob" : "nav-links"} onClick={() => setIsMob(false)}>
                <Link to='/adminDashboard' className="adminDashboard">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                        <MdOutlineDashboard fontSize={"24px"} />
                        <li>Dashboard</li>
                    </div>
                </Link>
                <Link to='/adminPurchase' className="purchaseHistory">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                        <MdDescription fontSize={"24px"} />
                        <li>Purchase History</li>
                    </div>
                </Link>
                <Link to='/adminaddproduct' className="adminaddproduct">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                        <MdLibraryAdd fontSize={"24px"} />
                        <li>Add Products</li>
                    </div>
                </Link>
                <Link to='#' className="welcomeAdmin">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                        <FaUserAlt fontSize={"24px"} />
                        <li>Welcome Admin</li>
                    </div>
                </Link>
            </div>
            <button className="mobile-menu-icon" onClick={() => setIsMob(!isMob)}>
                {isMob ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default AdminNavbar