import groupProfiles from "../assets/images/group_profiles-BCL6AVF5.png";
import headerImg from "../assets/images/header_img-DhAi3lLA.png";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import 'boxicons';

const Homepage = () => {
    return <>
        <main className="max-w-[90%] sm:max-w-[80%] m-auto mt-3">
            <div className="bg-[#3A60E6] rounded">
                <div className="flex flex-col lg:flex-row justify-between items-center px-[3em] sm:px-[5.5em] gap-5 lg:gap-0">
                    <div className="mt-[2em] lg:mt-0 w-full lg:w-[42%]">
                        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-5">Book Appointment With Trusted Doctors</p>
                        <div className="flex flex-col lg:flex-row gap-3 mb-5">
                            <img src={groupProfiles} alt="" className="w-28 m-auto lg:m-0" />
                            <p className="text-sm text-white">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                        </div>
                        <Link to="/#inserthere">
                            <Button
                                size='md'
                                p={6} // You can adjust the padding value as needed
                                borderRadius={25}
                                className="flex justify-between items-center bg-white text-black text-sm md:text-base drop-shadow-lg"
                            >
                                <span>Book Appointment</span>
                                <box-icon name="chevron-right" color="black"></box-icon>
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <img src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Homepage;