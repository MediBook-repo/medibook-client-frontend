import { useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import MediBookInformation from "../components/MediBookInformation";

const Doctors = () => {

    const [isFilteredButtonActivated, setIsFilteredButtonActivated] = useState(false);

    // Get the specialty from the route parameters (e.g., /doctors/:id)
    const { id } = useParams();

    // Temporary data for doctors, each with name, specialty, availability, and image
    const temporaryDataForTopDoctors = [
        { id: 1, isDoctorAvailable: false, name: "Dr. Richard James", position: "General Physician", specialty: "generalphysician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" },
        { id: 2, isDoctorAvailable: true, name: "Dr. Emily Larson", position: "Gynecologist", specialty: "gynecologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" },
        { id: 3, isDoctorAvailable: true, name: "Dr. Sarah Patel", position: "Dermatologist", specialty: "dermatologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" },
        { id: 4, isDoctorAvailable: true, name: "Dr. Christopher Lee", position: "Pediatrician", specialty: "pediatricians", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" },
        { id: 5, isDoctorAvailable: true, name: "Dr. Jennifer Garcia", position: "Neurologist", specialty: "neurologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" },
        { id: 6, isDoctorAvailable: true, name: "Dr. Andrew Williams", position: "Gastroenterologist", specialty: "gastroenterologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" },
        { id: 7, isDoctorAvailable: true, name: "Dr. Christopher Davis", position: "General Physician", specialty: "generalphysician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" },
    ];

    // Filter the doctors based on the selected specialty (route param id). If no id is provided, show all doctors.
    const filteredDoctors = id ? temporaryDataForTopDoctors.filter(doctor => doctor.specialty === id) : temporaryDataForTopDoctors;

    return (
        <>
            <section className="max-w-[90%] sm:max-w-[80%] m-auto">
                <div className="mt-7 pb-[3em]">
                    {/* Title for the doctor browsing section */}
                    <p className="text-md pb-3 font-bold mb-3">Browse through the doctors specialist.</p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Sidebar for selecting a doctor specialty */}
                        <div className="hidden sm:flex flex-col gap-3 w-full sm:w-64">
                            {/* Link to show all doctors */}
                            <Link to="/doctors">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === '' || id === undefined ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">All</span>
                                </p>
                            </Link>

                            {/* Specialty links for filtering doctors */}
                            <Link to="/doctors/generalphysician">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'generalphysician' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">General Physician</span>
                                </p>
                            </Link>
                            <Link to="/doctors/gynecologist">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'gynecologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">Gynecologist</span>
                                </p>
                            </Link>
                            <Link to="/doctors/dermatologist">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'dermatologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">Dermatologist</span>
                                </p>
                            </Link>
                            <Link to="/doctors/pediatricians">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'pediatricians' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">Pediatricians</span>
                                </p>
                            </Link>
                            <Link to="/doctors/neurologist">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'neurologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">Neurologist</span>
                                </p>
                            </Link>
                            <Link to="/doctors/gastroenterologist">
                                <p className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'gastroenterologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'}`}>
                                    <span className="ml-2">Gastroenterologist</span>
                                </p>
                            </Link>
                        </div>
                        <div className="block sm:hidden gap-3 w-full">
                            <button
                                className={`cursor-pointer border border-gray-300 px-3 rounded-sm inline-block mb-3 ${isFilteredButtonActivated && 'bg-[#3A60E6] text-white border-[#3A60E6]'
                                    }`}
                                onClick={() => setIsFilteredButtonActivated(!isFilteredButtonActivated)}
                            >
                                Filters
                            </button>

                            {isFilteredButtonActivated && (
                                <div className="flex sm:hidden flex-col gap-3 w-full sm:w-64">
                                    {/* Link to show all doctors */}
                                    <Link to="/doctors">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === '' || id === undefined
                                                ? 'bg-[#E2E5FF] font-bold'
                                                : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">All</span>
                                        </p>
                                    </Link>

                                    {/* Specialty links for filtering doctors */}
                                    <Link to="/doctors/generalphysician">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'generalphysician' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">General Physician</span>
                                        </p>
                                    </Link>
                                    <Link to="/doctors/gynecologist">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'gynecologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">Gynecologist</span>
                                        </p>
                                    </Link>
                                    <Link to="/doctors/dermatologist">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'dermatologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">Dermatologist</span>
                                        </p>
                                    </Link>
                                    <Link to="/doctors/pediatricians">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'pediatricians' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">Pediatricians</span>
                                        </p>
                                    </Link>
                                    <Link to="/doctors/neurologist">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'neurologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">Neurologist</span>
                                        </p>
                                    </Link>
                                    <Link to="/doctors/gastroenterologist">
                                        <p
                                            className={`text-sm border border-gray-300 p-1 rounded-sm ${id === 'gastroenterologist' ? 'bg-[#E2E5FF] font-bold' : 'text-gray-500'
                                                }`}
                                        >
                                            <span className="ml-2">Gastroenterologist</span>
                                        </p>
                                    </Link>
                                </div>
                            )}
                        </div>



                        {/* Display the doctor cards based on the selected specialty */}
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5 w-full">
                            {/* If there are doctors matching the filter, display them */}
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => {
                                    const { id, name, position, isDoctorAvailable, url } = doctor;
                                    return (
                                        <Link to={`/appointment/${id}`} key={id}>
                                            <DoctorCard
                                                url={url}
                                                name={name}
                                                isDoctorAvailable={isDoctorAvailable}
                                                position={position}
                                            />
                                        </Link>
                                    );
                                })
                            ) : (
                                // Show this message if no doctors match the selected specialty
                                <p>No doctors found for this specialty.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[90%] sm:max-w-[80%] m-auto">
                <MediBookInformation />
            </div>
        </>

    );
};

export default Doctors;
