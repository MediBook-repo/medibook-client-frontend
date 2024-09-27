import { useParams } from "react-router-dom";

const Doctors = () => {
    const { id } = useParams();
    return <section className="max-w-[90%] sm:max-w-[80%] m-auto">
        <p className="text-sm py-3">Browse through the doctors specialist.</p>
        <p>{id}</p>
    </section>
}

export default Doctors;