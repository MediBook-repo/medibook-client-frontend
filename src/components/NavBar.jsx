import { Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useRef, useEffect } from "react";

// Import image asset
import medibook_img_1 from '../assets/images/medibook-img-2.png';

// Import Chakra UI components for Drawer
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react';

// Import the hook for controlling the Drawer
import { useDisclosure } from "@chakra-ui/react";

// Import boxicons library for icons
import 'boxicons';

const NavBar = () => {

    // temp auth
    const isUserLoggedIn = true;

    const profilePicBelowElement = useRef(null);

    const toggleProfilePicBelowElement = () => {
        if (profilePicBelowElement.current.classList.contains('hidden')) {
            profilePicBelowElement.current.classList.remove('hidden');
        } else {
            profilePicBelowElement.current.classList.add('hidden');
        }
    }

    // Handle drawer open/close states using Chakra UI's useDisclosure hook
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Hook to get the current path from react-router-dom
    const location = useLocation();

    // Function to check if a path is active
    // For the '/doctors' path, it also checks if the path starts with '/doctors' to include routes like '/doctors/123'
    const isActive = (path) => {
        if (path === '/doctors') {
            return location.pathname === '/doctors' || location.pathname.startsWith('/doctors/');
        }
        return location.pathname === path;
    };

    useEffect(() => {
        profilePicBelowElement.current.classList.add('hidden');
    }, [location.pathname])

    return (
        <nav className="max-w-[90%] sm:max-w-[80%] m-auto">
            <div className="flex justify-between items-center">
                {/* Logo section */}
                <div className="flex justify-between items-center">
                    {/* Company logo */}
                    <img src={medibook_img_1} alt="MediBook Logo" className="w-[80px]" />
                    {/* Company name */}
                    <p className="text-[1.7em]">
                        <span className="font-bold text-[#3A60E6]">Medi</span>
                        <span className="font-bold text-[#67C8FF]">Book</span>
                    </p>
                </div>

                {/* Desktop navigation */}
                <ul className="hidden lg:flex justify-between gap-5">
                    {/* HOME nav item */}
                    <li>
                        <Link className="font-bold" to="/">
                            HOME
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isActive('/') ? '' : 'hidden'}`} />
                    </li>
                    {/* ALL DOCTORS nav item */}
                    <li>
                        <Link className="font-bold" to="/doctors">
                            ALL DOCTORS
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isActive('/doctors') ? '' : 'hidden'}`} />
                    </li>
                    {/* ABOUT nav item */}
                    <li>
                        <Link className="font-bold" to="/about">
                            ABOUT
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isActive('/about') ? '' : 'hidden'}`} />
                    </li>
                    {/* CONTACT nav item */}
                    <li>
                        <Link className="font-bold" to="/contact">
                            CONTACT
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isActive('/contact') ? '' : 'hidden'}`} />
                    </li>
                </ul>

                {/* Create Account button for large screens */}
                {
                    !isUserLoggedIn
                        ? <ul className="hidden lg:block">
                            <li>
                                <Link to="/createaccount">
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

                        : <ul
                            className="hidden lg:block cursor-pointer"
                            onClick={toggleProfilePicBelowElement}
                        >
                            <li>
                                <div className="flex align-middle">
                                    <div className="bg-gray-300 p-1 rounded-full flex justify-center align-middle">
                                        <box-icon type='solid' name='user-circle' size='31px' color="gray"></box-icon>
                                    </div>
                                    <div className="mt-2">
                                        <box-icon name='chevron-down'></box-icon>
                                    </div>
                                </div>
                            </li>
                        </ul>
                }

                {/* Mobile menu icon for opening the Drawer */}
                <div className="block lg:hidden mt-2">
                    <box-icon name='menu-alt-right' color='#3A60E6' size='30px' onClick={onOpen}></box-icon>
                </div>
            </div>

            {/* Mobile Drawer for small screens */}
            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size='full'>
                <DrawerOverlay />
                <DrawerContent>
                    {/* Drawer header */}
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className="flex justify-between items-center">
                            {/* Logo in Drawer */}
                            <div className="flex items-center">
                                <img src={medibook_img_1} alt="MediBook Logo" className="w-[60px]" />
                                <p className="text-[1.2em]">
                                    <span className="font-bold text-[#3A60E6]">Medi</span>
                                    <span className="font-bold text-[#67C8FF]">Book</span>
                                </p>
                            </div>
                            {/* Close icon for drawer */}
                            <box-icon name='x' onClick={onClose} className="cursor-pointer"></box-icon>
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        {/* Drawer menu items */}
                        <div className="text-center mt-4">
                            <Link className="font-bold" to="/" onClick={onClose}>
                                <Button
                                    style={{
                                        backgroundColor: `${isActive('/') ? '#3A60E6' : 'white'}`,
                                        color: `${isActive('/') ? 'white' : 'black'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    HOME
                                </Button>
                            </Link>
                        </div>
                        <div className="text-center mt-4">
                            <Link className="font-bold" to="/doctors" onClick={onClose}>
                                <Button
                                    style={{
                                        backgroundColor: `${isActive('/doctors') ? '#3A60E6' : 'white'}`,
                                        color: `${isActive('/doctors') ? 'white' : 'black'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    ALL DOCTORS
                                </Button>
                            </Link>
                        </div>
                        <div className="text-center mt-4">
                            <Link className="font-bold" to="/about" onClick={onClose}>
                                <Button
                                    style={{
                                        backgroundColor: `${isActive('/about') ? '#3A60E6' : 'white'}`,
                                        color: `${isActive('/about') ? 'white' : 'black'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    ABOUT
                                </Button>
                            </Link>
                        </div>
                        <div className="text-center mt-4">
                            <Link className="font-bold" to="/contact" onClick={onClose}>
                                <Button
                                    style={{
                                        backgroundColor: `${isActive('/contact') ? '#3A60E6' : 'white'}`,
                                        color: `${isActive('/contact') ? 'white' : 'black'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    CONTACT
                                </Button>
                            </Link>
                        </div>

                        {/* Create Account button in drawer */}
                        {
                            !isUserLoggedIn && <div className="text-center mt-4">
                                <Link className="font-bold" to="/createaccount" onClick={onClose}>
                                    <Button
                                        style={{
                                            backgroundColor: `${isActive('/createaccount') ? '#3A60E6' : 'white'}`,
                                            color: `${isActive('/createaccount') ? 'white' : 'black'}`,
                                            fontWeight: "bold"
                                        }}
                                        size='lg'
                                    >
                                        CREATE ACCOUNT
                                    </Button>
                                </Link>
                            </div>
                        }

                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Separator line */}
            <hr />

            <div
                className="relative hidden z-20"
                ref={profilePicBelowElement}>
                <div className="absolute right-[0em] bg-gray-100 p-3 mt-1 w-[170px]  hidden flex-col gap-3 lg:flex">
                    <Link to="myprofile"><p className="font-bold">My Profile</p></Link>
                    <Link to="myappointments"><p className="font-bold">My Appointments</p></Link>
                    <Link to=""><p className="font-bold">Logout</p></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
