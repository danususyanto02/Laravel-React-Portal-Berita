const iniBerita = (berita) => {

    return berita.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.judul}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.deskripsi}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.kategori}</div>
                        <div className="badge badge-outline">{data.penulis}</div>
                    </div>
                </div>
            </div>

            
        
    })
}


const beritaKosong = () => {
    return(
        <div>Berita Tidak Tersedia</div>
    )
}

const BeritaList = ({ berita }) => {
    return !berita ? beritaKosong() : iniBerita(berita)
}

export default BeritaList