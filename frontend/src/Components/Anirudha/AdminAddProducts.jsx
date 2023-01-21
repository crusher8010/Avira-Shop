import { Input, Heading, Button } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import AdminNavbar from './AdminNavbar'
import "./AdminNavbar.css";

function AdminAddProducts() {
    const [url, setUrl] = useState("")
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [rat, setRat] = useState(0);
    const [price, setPrice] = useState(0)
    const [change, setChange] = useState(false);
    const [data, setData] = useState([]);
    const temp = localStorage.getItem('token');

    const fetchdata = () => {
        fetch('https://shy-puce-cod-hose.cyclic.app/sample', {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => setData(res.data.samplewatches))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            url, brand, price, rating: rat, color
        }

        fetch('https://shy-puce-cod-hose.cyclic.app/sample', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Authorization": `${temp}`,
                'Content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetchdata();
            })
            .catch(err => console.log(err))

        setUrl("");
        setBrand("");
        setPrice(0);
        setRat(0);
        setColor("");
    }

    const handleUpdate = (watch) => {
        setUrl(watch.url);
        setBrand(watch.brand);
        setPrice(watch.price);
        setRat(watch.rating);
        setColor(watch.color);
        localStorage.setItem('updateId', watch._id);
        setChange(true)
    }

    const handlePatch = (e) => {
        e.preventDefault();

        let obj = {
            url, brand, price, rating: rat, color
        }

        const id = localStorage.getItem('updateId');

        fetch(`https://shy-puce-cod-hose.cyclic.app/sample/${id}`, {
            method: "PATCH",
            body: JSON.stringify(obj),
            headers: {
                "Authorization": `${temp}`,
                'Content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetchdata();
            })
            .catch(err => console.log(err))

        setUrl("");
        setBrand("");
        setPrice(0);
        setRat(0);
        setColor("");
    }

    const handleDelete = (id) => {
        fetch(`https://shy-puce-cod-hose.cyclic.app/sample/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `${temp}`,
                'Content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                fetchdata();
            })
            .catch(err => console.log(err))

        setUrl("");
        setBrand("");
        setPrice(0);
        setRat(0);
        setColor("");
    }

    return (
        <>
            <AdminNavbar />
            <Heading color={"#cc2293"} mt={"20px"} textAlign={"center"}>All Crude Operations</Heading>
            <div className='formContainer'>
                <div>
                    <label htmlFor="url">Image Url</label>
                    <Input borderRadius={"12px"} type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <label htmlFor="brand">Brand</label>
                    <Input borderRadius={"12px"} type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <label htmlFor="price">Price</label>
                    <Input borderRadius={"12px"} type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <Input borderRadius={"12px"} type="number" name="rating" value={rat} onChange={(e) => setRat(e.target.value)} />
                    <label htmlFor="color">Color</label>
                    <Input borderRadius={"12px"} type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    {change === true ? <button className='formbutton' type="submit" onClick={(e) => handlePatch(e)}>Update</button> : <button className='formbutton' type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>}
                </div>
            </div>
            <div className='sampleContainer'>
                {data.map((item) => {
                    return (
                        <div className='eachgrid' key={item._id}>
                            <img src={item.url} alt="" />
                            <h3>Brand: {item.brand}</h3>
                            <h4>Price: Rs.{item.price}</h4>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button onClick={() => handleUpdate(item)}>Update</Button>
                                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AdminAddProducts;