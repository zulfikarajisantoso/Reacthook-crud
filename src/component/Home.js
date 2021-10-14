import {useState, useEffect} from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [mahasiswa, setmahasiswa] = useState([]);

    useEffect(() => {
        bildata();
    }, [])
    // const bildata = () => {
    //     axios.get('http://localhost:3004/mahasiswa')
    //     .then((response)=> {
    //         setmahasiswa = response
    //     })
    // }
    const bildata = async() => {
        const response = await fetch('http://localhost:3004/mahasiswa');
        const data = await response.json();
        setmahasiswa(data)
    }

    const deleted = async(id) => {
        await fetch(`http://localhost:3004/mahasiswa/${id}`, {
            method: "DELETE",
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        bildata();
     
    }
    return (
        <div>
            <Table striped bordered hover size="sm" className="mt-2">
            <thead>
                <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Asal</th>
                <th>Aksi</th>
                
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map((maha, index) => (
                     <tr key={maha.id}>
                     <td>{index + 1}</td>
                     <td>{maha.nama}</td>
                     <td>{maha.asal}</td>
                        <td >
                            <Link to={`/edit/${maha.id}`} className="btn btn-warning btn-small" variant="warning mr-2">Edit</Link>
                            <Button onClick={() => deleted(maha.id)} variant="danger ml-2">Hapus</Button>
                        </td>
                     </tr>
                ))}
               
                
            </tbody>
            </Table>
        </div>
    )
}

export default Home
