import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const TopDoctors = () => {
    const temporaryDataForTopDoctors = [
        { id: 1, status: "Not Available", name: "Dr. Richard James", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" },
        { id: 2, status: "Available", name: "Dr. Emily Larson", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" },
        { id: 3, status: "Available", name: "Dr. Sarah Patel", position: "Dermatologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" },
        { id: 4, status: "Available", name: "Dr. Christopher Lee", position: "Pediatricians", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" },
        { id: 5, status: "Available", name: "Dr. Jennifer Garcia", position: "Neurologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" },
        { id: 6, status: "Available", name: "Dr. Andrew Williams", position: "Gastroenterologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" },
        { id: 7, status: "Available", name: "Dr. Christopher Davis", position: "General Physician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" },
    ]
    return <>
        <section className="pb-[5em]">
            <h1 className="text-3xl font-[600] text-center mb-5">Top Doctors to Book</h1>
            <p className="text-center mt-2 sm:w-1/3 text-sm m-auto mb-12">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div class="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5">
                {
                    temporaryDataForTopDoctors.map((doctor) => {
                        const { id, name, position, status, url } = doctor;
                        return <Link to="/">
                            <div class="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                                <img className="bg-[#EAEFFF]" src={url} alt="" />
                                <div className="p-4">
                                    <div className="flex items-center gap-1">
                                        <div className={`w-2 h-2 rounded-full ${status == 'Available' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                        <p className={`text-sm font-bold text-green-600 ${status == 'Available' ? 'text-green-600' : 'text-red-600'}`}>{status}</p>
                                    </div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-[0.8rem]">{position}</p>
                                </div>
                            </div>
                        </Link>
                    })
                }
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
                        <span>
                            View More
                        </span>
                    </Button>
                </Link>
            </div>


        </section>
    </>
}

export default TopDoctors;