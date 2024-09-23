import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import medibook_img_1 from '../assets/images/medibook-img-2.png';

const NavBar = () => {
    const [isHidden, setIsHidden] = useState({
        homeHr: false,
        allDoctorsHr: true,
        aboutHr: true,
        contactHr: true
    });

    const handleToggle = (key) => {
        setIsHidden({
            homeHr: true,
            allDoctorsHr: true,
            aboutHr: true,
            contactHr: true,
            [key]: false
        });
    };


    return (
        <nav className="max-w-[80%] m-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <img src={medibook_img_1} alt="MediBook Logo" className="w-[80px]" />
                    <p className="text-[1.7em]">
                        <span className="font-bold text-[#3A60E6]">Medi</span>
                        <span className="font-bold text-[#67C8FF]">Book</span>
                    </p>
                </div>

                <ul className="flex justify-between gap-5">
                    <li>
                        <Link
                            className="font-bold"
                            to="/"
                            onClick={() => handleToggle('homeHr')}
                        >
                            HOME
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isHidden.homeHr ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/doctors"
                            onClick={() => handleToggle('allDoctorsHr')}
                        >
                            ALL DOCTORS
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isHidden.allDoctorsHr ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/about"
                            onClick={() => handleToggle('aboutHr')}
                        >
                            ABOUT
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isHidden.aboutHr ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/contact"
                            onClick={() => handleToggle('contactHr')}
                        >
                            CONTACT
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isHidden.contactHr ? 'hidden' : ''}`} />
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link
                            to="/createaccount"
                            onClick={() => {
                                setIsHidden({
                                    homeHr: true,
                                    allDoctorsHr: true,
                                    aboutHr: true,
                                    contactHr: true
                                });
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: '#3A60E6',
                                    color: 'white',
                                    fontWeight: "normal"
                                }}
                                size='md'
                            >
                                Create Account
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>

            <hr />
        </nav>
    );
}

export default NavBar;
