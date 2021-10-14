import {useEffect, useState} from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router';

const Edit = () => {
    const [nama,  setnama] = useState([]);
    const [asal,  setasal] = useState([]);
    const history = useHistory();
    const {id} = useParams();


    useEffect(() => {
        getid();
    }, [])

    const getid = async() => {
        const response = await fetch(`http://localhost:3004/mahasiswa/${id}`)
        const data = await response.json();
        setnama(data.nama);
        setasal(data.asal);
    }


    const update = async(e) => {
        e.preventDefault();
        const data = {nama, asal}
        console.log(data)
        await fetch(`http://localhost:3004/mahasiswa/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        history.push("/")
    }
    return (
        <div className="">
            <Form className="w-100"  onSubmit={update}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama</Form.Label>
                    <FormControl value={nama} onChange={(e) => setnama(e.target.value)} className="w-50 mx-auto input" type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Asal</Form.Label>
                    <FormControl value={asal} onChange={(e) => setasal(e.target.value)} className="w-50 mx-auto input" type="text" placeholder="Asal" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
                </Form>
        </div>
    )
}

export default Edit
