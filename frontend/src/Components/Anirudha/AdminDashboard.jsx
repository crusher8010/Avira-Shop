import AdminNavbar from "./AdminNavbar";
import Graph from "./Graph";
import "./AdminNavbar.css";
import { Text, Heading } from "@chakra-ui/react";

function AdminDashboard() {

    return (
        <>
            <AdminNavbar />
            <Graph />
            <br />
            <Heading className="overviewHeading">OVERVIEW</Heading>
            <div className="overview">
                <div style={{ height: "100px", border: "1px solid", backgroundColor: "#9932CC" }}>
                    <Text fontSize={"xl"} className="tempHeading" ><b>Total Customers</b></Text>
                    <Text><b>25,431</b></Text>
                </div>
                <div style={{ height: "100px", border: "1px solid", backgroundColor: "crimson" }}>
                    <Text fontSize={"xl"} className="tempHeading" ><b>Today's Income</b></Text>
                    <Text><b>₹ 5,431</b></Text>
                </div>
                <div style={{ height: "100px", border: "1px solid", backgroundColor: "skyblue" }}>
                    <Text fontSize={"xl"} className="tempHeading" ><b>Order Canceled Today</b></Text>
                    <Text><b>0</b></Text>
                </div>
                <div style={{ height: "100px", border: "1px solid", backgroundColor: "lightgreen" }}>
                    <Text fontSize={"xl"} className="tempHeading" ><b>Pending Order</b></Text>
                    <Text><b>3</b></Text>
                </div>
            </div>
            <div style={{ marginTop: "10px", padding: "20px" }}>
                <Heading color={"#cc2293"}>Customer Reviews</Heading>
                <div className="admin-review">
                    <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    <div>
                        <h1><b>Cassy keth</b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis voluptatibus maxime ea aut modi, aliquam vero recusandae suscipit ratione reprehenderit molestiae ullam dolorum voluptatum voluptatem esse consequatur? Aut nobis, voluptate temporibus officia tenetur facilis in reiciendis officiis obcaecati a cupiditate non, debitis exercitationem voluptates?</p>
                    </div>
                </div>
                <div className="admin-review">
                    <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="" />
                    <div>
                        <h1><b>David Miller</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente explicabo ut maiores vitae dolorum hic doloribus. Iusto harum explicabo libero id animi consequuntur, voluptates accusamus accusantium, odit quibusdam cupiditate ipsam quae sit fuga totam similique numquam.</p>
                    </div>
                </div>
                <div className="admin-review">
                    <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src="https://previews.123rf.com/images/thefinalmiracle/thefinalmiracle1110/thefinalmiracle111000056/11065574-a-portrait-of-a-young-indian-man-.jpg" alt="" />
                    <div>
                        <h1><b>Rahul Sharma</b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum magnam, nesciunt tempore dicta quaerat cupiditate dignissimos doloribus tempora a tenetur dolorem? Voluptates ut, eveniet earum eligendi quae magnam reiciendis molestiae quo! Dolor, hic odio. Error autem cupiditate tempora reiciendis!</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDashboard;