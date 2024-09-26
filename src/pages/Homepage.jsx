import groupProfiles from "../assets/images/group_profiles-BCL6AVF5.png";
import headerImg from "../assets/images/header_img-DhAi3lLA.png";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpecialitySlick from "../components/SpecialitySlick";

import 'boxicons';
import TopDoctors from "../components/TopDoctors";
import appointment_img from "../assets/images/appointment_img-DzbZlMsi.png";

import medibook_img_1 from '../assets/images/medibook-img-2.png';


const Homepage = () => {
    return <>
        <main className="max-w-[90%] sm:max-w-[80%] m-auto mt-3">
            <div className="bg-[#3A60E6] rounded">
                <div className="flex flex-col lg:flex-row justify-between items-center px-[3em] sm:px-[5.5em] gap-5 lg:gap-0">
                    <div className="mt-[2em] lg:mt-0 max-w-[400px]">
                        <p className="text-3xl md:text-3xl lg:text-4xl text-white font-semibold mb-5">Book Appointment With Trusted Doctors</p>
                        <div className="flex flex-col lg:flex-row gap-3 mb-5 items-start">
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

            <SpecialitySlick />
            <TopDoctors />

            <section className="pb-[4em]">
                <div className="bg-[#3A60E6] rounded h-auto md:h-[400px] py-[6em] md:py-0">
                    <div className="md:flex md:items-center md:justify-between mx-[4em]">
                        <div className="sm:max-w-[90%] md:max-w-[37%]">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4" style={{ lineHeight: "1.2em" }}>Book Appointment With 100+ Trusted Doctors</p>
                            <Link to="/">
                                <Button
                                    size='md'
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "20px",
                                        width: "10em",
                                        padding: "1.3em"
                                    }}
                                >
                                    <span className="text-sm">
                                        Create Account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <img src={appointment_img} alt="" className="w-[300px] lg:w-[410px] hidden md:block relative top-[4.4em] lg:top-[-3.1em]" />
                        </div>
                    </div>
                </div>
            </section>

            <article className="pt-[1.3em] pb-[5em]">
                <div className="flex flex-col gap-0 md:flex-row md:gap-24">

                    <div className="w-auto md:w-[50%]">
                        <div className="flex items-center">
                            <img src={medibook_img_1} alt="MediBook Logo" className="w-[80px]" />
                            <p className="text-[1.7em]">
                                <span className="font-bold text-[#3A60E6]">Medi</span>
                                <span className="font-bold text-[#67C8FF]">Book</span>
                            </p>
                        </div>
                        <p className="text-sm ml-3 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="ml-3 md:ml-0">
                        <p className="font-bold text-2xl mt-8 mb-6">COMPANY</p>
                        <ul className="flex flex-col gap-3">
                            <li><p className="text-sm">Home</p></li>
                            <li><p className="text-sm">About Us</p></li>
                            <li><p className="text-sm">Delivery</p></li>
                            <li><p className="text-sm">Privacy Policy</p></li>
                        </ul>
                    </div>

                    <div className="ml-3 md:ml-0">
                        <p className="font-bold text-2xl mt-8 mb-6">GET IN TOUCH</p>
                        <ul className="flex flex-col gap-3">
                            <li><p className="text-sm">+0-000-000-000</p></li>
                            <li><p className="text-sm">wdotgonzales@gmail.com</p></li>
                        </ul>
                    </div>

                </div>
            </article>

        </main>
    </>
}

export default Homepage;