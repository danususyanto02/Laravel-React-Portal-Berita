import { Link } from "@inertiajs/inertia-react";


const Paginator = ({ meta }) => {

    const sebelumnya = meta.links[0].url;
    const selanjutnya = meta.links[meta.links.length - 1].url;
    const halamanSekarang = meta.current_page;

    return (
        <div>
            <div className="btn-group">
                {sebelumnya && <Link href={sebelumnya} className="btn">«</Link>}

                <button className="btn">{halamanSekarang}</button>

                {selanjutnya && <Link href={selanjutnya} className="btn">»</Link>}
            </div>
        </div>
    )
}

export default Paginator