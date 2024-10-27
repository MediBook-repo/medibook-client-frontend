import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import MediBookInformation from "./MediBookInformation";
import 'boxicons';

const Appointment = () => {
    const [chosenDoctor, setChosenDoctor] = useState(null);
    const { id } = useParams(); // Extracts the 'id' parameter from the URL

    const temporaryDataForTopDoctors = [
        { id: 1, isDoctorAvailable: false, name: "Dr. Richard James", position: "General Physician", specialty: "generalphysician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png" },
        { id: 2, isDoctorAvailable: true, name: "Dr. Emily Larson", position: "Gynecologist", specialty: "gynecologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png" },
        { id: 3, isDoctorAvailable: true, name: "Dr. Sarah Patel", position: "Dermatologist", specialty: "dermatologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc3.png" },
        { id: 4, isDoctorAvailable: true, name: "Dr. Christopher Lee", position: "Pediatrician", specialty: "pediatricians", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc4.png" },
        { id: 5, isDoctorAvailable: true, name: "Dr. Jennifer Garcia", position: "Neurologist", specialty: "neurologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc5.png" },
        { id: 6, isDoctorAvailable: true, name: "Dr. Andrew Williams", position: "Gastroenterologist", specialty: "gastroenterologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc6.png" },
        { id: 7, isDoctorAvailable: true, name: "Dr. Christopher Davis", position: "General Physician", specialty: "generalphysician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc7.png" },
    ];


    useEffect(() => {
        const findChosenDoctor = temporaryDataForTopDoctors.find((doctor) => doctor.id == id);
        setChosenDoctor(findChosenDoctor);
    }, [id]);

    return (
        <section className="max-w-[90%] sm:max-w-[80%] m-auto py-8">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="z-0">
                    {chosenDoctor && (
                        <img src={chosenDoctor.url} alt={chosenDoctor.name} className="bg-[#3A60E6] w-full md:max-w-72 rounded-lg" />
                    )}
                </div>
                <div className="top-[-70px] z-10 relative mx-3 md:mx-0 md:static md:col-span-2 flex-1 border border-gray-500 rounded-lg bg-white">
                    <div className="p-9 text-gray-700">
                        {chosenDoctor && (
                            <>
                                <div className="flex items-center gap-1">
                                    <h1 className="text-3xl font-bold ">{chosenDoctor.name}</h1>
                                    <span className="mt-2">
                                        <box-icon type='solid' name='badge-check' color='blue' ></box-icon>
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center mt-1">
                                    <p>{chosenDoctor.position}</p>
                                    <div className="border border-gray-500 w-12 rounded-lg">
                                        <p className="text-[0.7em] text-center">4 years</p>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="text-black font-bold">About</p>
                                    <p>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.</p>
                                </div>

                                <div className="mt-4">
                                    <p>Appointment Fee: <span className="font-bold">₱230</span></p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>


            <div className="relative top-[-3em] md:static md:top-0 mt-0 md:mt-7">
                <div className="ml-0 md:ml-[19.3em]">
                    <p className="font-bold">Booking Slots</p>
                    <div
                        style={{
                            scrollbarWidth: 'none',  // For Firefox
                            msOverflowStyle: 'none'  // For IE and Edge
                        }}
                        className="flex gap-2 mt-3 overflow-auto">
                        <div className="px-4 py-6 cursor-pointer bg-[#3A60E6] text-white rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>
                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>
                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>                        <div className="px-4 py-6 cursor-pointer text-black border border-gray-400 rounded-full">
                            <div>
                                <p className="text-center font-bold">SUN</p>
                                <p className="text-center font-bold">7</p>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            scrollbarWidth: 'none',  // For Firefox
                            msOverflowStyle: 'none'  // For IE and Edge
                        }}
                        className="flex gap-2 mt-3 overflow-auto"
                    >
                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>
                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>                        <div className="text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                            <p className="text-gray-500 ">4:00 PM</p>
                        </div>
                    </div>

                    <Button
                        size="md"
                        className="w-64 mt-4"
                        bg="#3A60E6"
                        color="white"
                        borderRadius="120px"
                        fontWeight="normal"
                        _hover={{ bg: "#2521A8" }}  // Example hover color
                    >
                        Book an Appointment
                    </Button>
                </div>

                <div className="mt-[7em] md:mt-[5em]">
                    <MediBookInformation />
                </div>

            </div>
        </section>
    );
};

export default Appointment;
