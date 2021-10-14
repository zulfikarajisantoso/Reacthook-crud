import {useState} from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router';

const About = () => {
    const [nama,  setnama] = useState([]);
    const [asal,  setasal] = useState([]);
    const history = useHistory();

    const save = async(e) => {
        e.preventDefault();
        const data = {nama, asal}
        console.log(data)
        await fetch('http://localhost:3004/mahasiswa', {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        history.push("/")
    }
    return (
        <div className="">
            <Form className="w-100"  onSubmit={save}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama</Form.Label>
                    <FormControl value={nama} onChange={(e) => setnama(e.target.value)} className="w-50 mx-auto input" type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Asal</Form.Label>
                    <FormControl value={asal} onChange={(e) => setasal(e.target.value)} className="w-50 mx-auto input" type="text" placeholder="Asal" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                </Form>
        </div>
    )
}

export default About
