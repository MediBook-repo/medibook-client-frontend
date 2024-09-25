import speciality_1 from "../assets/images/speciality-1.svg";
import speciality_2 from "../assets/images/speciality-2.svg";
import speciality_3 from "../assets/images/speciality-3.svg";
import speciality_4 from "../assets/images/speciality-4.svg";
import speciality_5 from "../assets/images/speciality-5.svg";
import speciality_6 from "../assets/images/speciality-6.svg";

import { Link } from "react-router-dom";

const SpecialitySlick = () => {

    return (
        <section className="mt-12 pb-12">
            <h1 className="text-3xl font-[600] text-center">Find by Speciality</h1>
            <p className="text-center mt-2 sm:w-1/3 text-sm m-auto pb-8">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
            <div
                className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll"
                style={{
                    msOverflowStyle: 'none', /* IE and Edge */
                    scrollbarWidth: 'none',   /* Firefox */
                }}
            >
                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_1} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">General Physician</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_2} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">Gynecologist</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_3} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">Dermatologist</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_4} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">Pediatricians</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_5} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">Neurologist</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="flex flex-col items-center gap-2 text-center whitespace-nowrap">
                        <img src={speciality_6} alt="" className="w-16 sm:w-24" />
                        <p className="text-sm">Gastroenterologist</p>
                    </div>
                </Link>
            </div>

        </section>
    );
};

export default SpecialitySlick;
