import { Button } from "@chakra-ui/react";
import StatusComponent from "../components/StatusComponent";
const MyAppointments = () => {
    const temporaryDataForTopDoctors = [
        { id: 1, isDoctorAvailable: false, name: "Dr. Richard James", position: "General Physician", specialty: "generalphysician", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png", address: "27th Cross, Richmond Circle, Ring Road, London" },
        { id: 2, isDoctorAvailable: true, name: "Dr. Emily Larson", position: "Gynecologist", specialty: "gynecologist", url: "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc2.png", address: "27th Cross, Richmond Circle, Ring Road, London" }
    ];

    return <section className="max-w-[90%] sm:max-w-[80%] m-auto">
        <p className="font-bold text-gray-500 text-lg mt-5 mb-3">My Appointments</p>
        <hr />

        {/* parent */}
        <div>
            {/* child */}
            {
                temporaryDataForTopDoctors.map((singleData) => {
                    return <>
                        <div className="flex justify-between flex-col md:flex-row my-4 gap-3 md:gap-0 items-start">
                            <div className="flex gap-4">
                                <img src={singleData.url} alt="" className="w-36 bg-[#EAEFFF]" />
                                <div className="mt-2">
                                    <p className="font-bold text-md">{singleData.name}</p>
                                    <p className="text-sm">{singleData.position}</p>
                                    <p className="font-bold text-sm mt-1">Address:</p>
                                    <p className="text-sm">{singleData.address}</p>
                                    <p className="text-sm"><span className="font-bold">Date & Time:</span> 16 Dec 2024 | 10:00 AM</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <StatusComponent status={'Pending'} />


                                <Button
                                    size="sm"
                                    fontWeight="bold"
                                    backgroundColor="#3A60E6"
                                    color="white"
                                    borderRadius="3px"
                                    _hover={{
                                        backgroundColor: "#1E44CA", // You can replace this with any light red shade
                                    }}
                                >
                                    Payment
                                </Button>
                                
                                <Button
                                    size="sm"
                                    fontWeight="bold"
                                    backgroundColor="red"
                                    color="white"
                                    borderRadius="3px"
                                    _hover={{
                                        backgroundColor: "#C10000", // You can replace this with any light red shade
                                    }}
                                >
                                    Cancel Appointment
                                </Button>

                            </div>
                        </div>
                    </>
                })
            }
        </div>
    </section>
}

export default MyAppointments;