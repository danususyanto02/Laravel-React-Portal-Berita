import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';




export default function EditBerita(props) {

    const [judul, setJudul] = useState('');
    const [deskripsi, setdeskripsi] = useState('');
    const [kategori, setKategori] = useState('');


    const handleSubmit = () => {
        const data = {
           id: props.dataBeritaSaya.id, judul, deskripsi, kategori
        }
        Inertia.post('/berita/update', data)
        setJudul('')
        setdeskripsi('')
        setKategori('')

    }

    console.log(props);
    return (
        <div className=' min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="card-body">

                    <div className='p-4 text-2xl'>Edit Berita</div>

                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full"
                        onChange={(judul) => setJudul(judul.target.value)} defaultValue={props.dataBeritaSaya.judul} />

                    <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full "
                        onChange={(deskripsi) => setdeskripsi(deskripsi.target.value)} defaultValue={props.dataBeritaSaya.deskripsi} />

                    <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full "
                        onChange={(kategori) => setKategori(kategori.target.value)} defaultValue={props.dataBeritaSaya.kategori} />

                    <button className="btn m-2" onClick={() => handleSubmit()}>Update</button>
                </div>
            </div>



        </div>
    )
}