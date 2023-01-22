import "./Cart.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Globalcontext } from "../../Context/Context";
import { CartContext } from "../../Context/CartContext/CartContext";
import { removeFromCart, checkout } from "../../Context/CartContext/action";
import { useContext, useRef, useState } from "react";
import Uppernavbar from "../Sudev/WholeNavbar/UpperNavbar/UpperNavbar";
import LowerNavbar from "../Sudev/WholeNavbar/LowerNavbar/LowerNavbar";
import { Navigate } from "react-router-dom";
// import axios from "axios";

function Cart() {
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const { state, dispatch } = useContext(CartContext);
    const [temp, setTemp] = useState(state);
    const [len, setLen] = useState(state.length);
    let total = 0;
    const { userdetails } = useContext(Globalcontext);
    const [stat, setStat] = useState(false)

    const handledelete = (id) => {
        dispatch(removeFromCart(id));
        const dim = temp.filter((item) => {
            return item._id !== id;
        });
        setTemp(dim);
        const te = dim.reduce((a, c) => a + c.qty, 0);
        setLen(te);
        console.log(len);
    };

    const handleQty = (val, id) => {
        console.log(id);
        setTemp(
            temp.map((item) =>
                item._id === id ? { ...item, qty: item.qty + val } : item
            )
        );
        console.log(temp);
        setLen(len + val);
    };

    const OverlayOne = () => (
        <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<OverlayOne />);

    console.log(userdetails)

    const HandleSave = (total) => {

        let obj = {
            userId: userdetails._id,
            name: userdetails.username,
            mobile: userdetails.mobile_no,
            totalPurchase: total,
        };

        fetch("https://shy-puce-cod-hose.cyclic.app/cart", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        setTemp([]);
        dispatch(checkout());
        setLen(0);
        onClose();

        setStat(true)
    };

    if (stat) {
        return <Navigate to="/" />
    }

    console.log(temp);

    return (
        <>
            <Uppernavbar />
            <LowerNavbar />
            <div className="cart_container">
                <div className="cart_container_left">
                    <h3>Cart : {len} Items</h3>
                    <hr />

                    {temp.length > 0
                        ? temp.map((ele) => {
                            total += Number(ele.qty) * Number(ele.price);
                            return (
                                <div className="cart_container_left_main">
                                    <div className="cart_image">
                                        <img src={ele.url} alt={ele.brand} />
                                    </div>
                                    <div className="cart_rest">
                                        <h3>{ele.brand.substr(0, 30) + "..."}</h3>
                                        <div className="quantity">
                                            <p>Qty:</p>
                                            <button
                                                disabled={ele.qty === 1}
                                                onClick={() => handleQty(-1, ele._id)}
                                            >
                                                -
                                            </button>
                                            <button>{ele.qty}</button>
                                            <button onClick={() => handleQty(1, ele._id)}>+</button>
                                        </div>
                                        <h4>₹ {ele.price}</h4>
                                        <div className="remove_btn">
                                            <button onClick={() => handledelete(ele._id)}>
                                                Remove
                                            </button>
                                            <p>Free Delivery</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        : (
                            <div style={{ marginTop: "16px" }}>
                                <div style={{ width: "40%", margin: "auto" }}>
                                    <img
                                        style={{ width: "100%", margin: "auto" }}
                                        src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                </div>
                <div className="cart_container_right">
                    <h2>Price Details</h2>
                    <div className="total_price">
                        <p>Total Product Price </p>
                        <p>₹ {total}</p>
                    </div>
                    <hr />
                    <div className="order_total">
                        <p>Order Total </p>
                        <p>₹ {total}</p>
                    </div>

                    <div className="continue">
                        <div className="continue1">
                            Clicking on ‘Continue’ will not deduct any money
                        </div>
                        <div
                            className="continue2"
                            onClick={() => {
                                setOverlay(<OverlayOne />);
                                onOpen();
                            }}
                        >
                            Continue
                        </div>
                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Billing Details</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>User Id</FormLabel>
                                        <Input
                                            ref={initialRef}
                                            value={userdetails._id}
                                            disabled={true}
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>User Name</FormLabel>
                                        <Input
                                            placeholder="User name"
                                            value={userdetails.username}
                                        />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>User Mobile Number</FormLabel>
                                        <Input placeholder="User Mobile Number" value={userdetails.mobile_no} />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>Total Purchase</FormLabel>
                                        <Input
                                            placeholder="Total Purchase"
                                            value={total}
                                            disabled={true}
                                        />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        colorScheme="blue"
                                        mr={3}
                                        onClick={() => HandleSave(total)}
                                    >
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>

                    <hr />
                </div>
            </div>
        </>
    );
}

export default Cart;