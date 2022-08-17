import React, { useState,useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head,Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

    const [judul, setJudul] = useState('');
    const [deskripsi, setdeskripsi] = useState('');
    const [kategori, setKategori] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            judul, deskripsi, kategori
        }
        Inertia.post('/berita', data)
        setJudul('')
        setdeskripsi('')
        setKategori('')
        setIsNotif(true)
    }

    useEffect(()=>{

        if (!props.dataBeritaSaya) {
            Inertia.get('/berita')
        }
       
        return;
       
    }, [])

    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">

                        {!isNotif ? <div></div> : <div className="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{isNotif && props.flash.message}</span>
                            </div>
                        </div>}


                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full"
                            onChange={(judul) => setJudul(judul.target.value)} value={judul} />

                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full "
                            onChange={(deskripsi) => setdeskripsi(deskripsi.target.value)} value={deskripsi} />

                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full "
                            onChange={(kategori) => setKategori(kategori.target.value)} value={kategori} />

                        <button className="btn m-2" onClick={() => handleSubmit()}>Submit</button>
                    </div>

                </div>

                <div className='p-4'>
                    {props.dataBeritaSaya && props.dataBeritaSaya.length >0 ?  props.dataBeritaSaya.map((berita, i)=>{
                        return(
                            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {berita.judul}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{berita.deskripsi}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">{berita.kategori}</div>
                                        <div className="badge badge-outline">
                                            <Link href={route('berita.edit')} method="get" data={{id: berita.id}}>Edit</Link>
                                        </div>
                                        <div className="badge badge-outline">
                                        <Link href={route('berita.hapus')} method="delete" data={{id: berita.id}}>Hapus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }):  <p>Kamu Belum Memiliki Artikel Berita</p> }

                </div>
            </div>
        </Authenticated>
    );
}
