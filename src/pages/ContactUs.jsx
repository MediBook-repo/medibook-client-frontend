import GoogleMap from "../components/GoogleMap";
import contactus_image from "../assets/images/contactus_image.png";
import MediBookInformation from "../components/MediBookInformation";
import { Button } from "@chakra-ui/react";
const ContactUs = () => {
    return (
        <>
            <section className="max-w-[90%] sm:max-w-[80%] m-auto">
                <GoogleMap />
                <div>
                    <h1 className="text-center text-2xl font-semibold text-gray-500 mt-10">CONTACT <span className="font-semibold text-black">US</span></h1>
                    <div className="flex justify-center mt-10 mb-16">
                        <div className="flex flex-col md:flex-row">
                            <img src={contactus_image} alt="" className="w-full md:max-w-[360px]" />
                            <div className="flex flex-col gap-5 mt-6 md:p-5 md:mt-0">
                                <p className="font-bold text-lg">OUR OFFICE</p>
                                <p className="text-sm">204 Yap Quina Subdivision, Brgy. 1, Victoriás City, Negros Occidental</p>
                                <div className="text-sm">
                                    <p>Tel: (000) 000-0000</p>
                                    <p>Email: wdotgonzales@gmail.com</p>
                                </div>
                                <p className="text-lg font-bold">CAREERS AT <span className="font-bold text-[#3A60E6]">Medi</span><span className="font-bold text-[#67C8FF]">Book</span></p>
                                <p className="text-sm">Learn more about our teams and job openings.</p>
                                <Button
                                    bg="white"
                                    color="black"
                                    variant="outline"
                                    className="w-[30%] md:w-[50%] lg:w-[40%]"
                                    borderColor="black"
                                    borderRadius={1}
                                    _hover={{
                                        bg: "black",
                                        color: "white",
                                        borderColor: "black",
                                    }}
                                >
                                    <span>Explore Jobs</span>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
                <MediBookInformation />
            </section>
        </>
    );
}

export default ContactUs;
