import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
    const temporaryDataForTopDoctors = [
        { id: 1, isDoctorAvailable: false, name: "Dr. Richard James", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" },
        { id: 2, isDoctorAvailable: true, name: "Dr. Emily Larson", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" },
        { id: 3, isDoctorAvailable: true, name: "Dr. Sarah Patel", position: "Dermatologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" },
        { id: 4, isDoctorAvailable: true, name: "Dr. Christopher Lee", position: "Pediatricians", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" },
        { id: 5, isDoctorAvailable: true, name: "Dr. Jennifer Garcia", position: "Neurologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" },
        { id: 6, isDoctorAvailable: true, name: "Dr. Andrew Williams", position: "Gastroenterologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" },
        { id: 7, isDoctorAvailable: true, name: "Dr. Christopher Davis", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" },
    ];

    return (
        <section className="pb-[5em]">
            <h1 className="text-3xl font-[600] text-center mb-5">Top Doctors to Book</h1>
            <p className="text-center mt-2 sm:w-1/3 text-sm m-auto mb-12">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
                {temporaryDataForTopDoctors.map((doctor) => {
                    const { id, name, position, isDoctorAvailable, url } = doctor;
                    return (
                        <Link to="/" key={id}>
                            <DoctorCard
                                url={url}
                                name={name}
                                isDoctorAvailable={isDoctorAvailable}
                                position={position}
                            />
                        </Link>
                    );
                })}
            </div>

            <div className="flex items-center justify-center mt-[2.5em]">
                <Link to="/sds">
                    <Button
                        size='md'
                        style={{
                            backgroundColor: "#EAEFFF",
                            width: "9em",
                            padding: "1.5em",
                            borderRadius: "100px"
                        }}
                    >
                        <span>View More</span>
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default TopDoctors;
