import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

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
    // Handle drawer open/close states
    const { isOpen, onOpen, onClose } = useDisclosure();

    // State to manage which nav item is active
    const [isNotActivated, setIsNotActivated] = useState({
        home: false,         // Home is initially active
        allDoctors: true,    // Other tabs are inactive
        about: true,
        contact: true,
        createAccount: true
    });

    // Function to toggle active state of nav items
    const handleToggle = (key) => {
        // Reset all nav items to inactive, then activate the selected one
        setIsNotActivated({
            home: true,
            allDoctors: true,
            about: true,
            contact: true,
            createAccount: true,
            [key]: false    // Activate selected item
        });
    };

    return (
        <nav className="max-w-[90%] sm:max-w-[80%] m-auto">
            <div className="flex justify-between items-center">
                {/* Logo section */}
                <div className="flex justify-between items-center">
                    <img src={medibook_img_1} alt="MediBook Logo" className="w-[80px]" />
                    <p className="text-[1.7em]">
                        <span className="font-bold text-[#3A60E6]">Medi</span>
                        <span className="font-bold text-[#67C8FF]">Book</span>
                    </p>
                </div>

                {/* Desktop navigation */}
                <ul className="hidden lg:flex justify-between gap-5">
                    {/* HOME nav item */}
                    <li>
                        <Link
                            className="font-bold"
                            to="/"
                            onClick={() => handleToggle('home')}
                        >
                            HOME
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.home ? 'hidden' : ''}`} />
                    </li>
                    {/* ALL DOCTORS nav item */}
                    <li>
                        <Link
                            className="font-bold"
                            to="/doctors"
                            onClick={() => handleToggle('allDoctors')}
                        >
                            ALL DOCTORS
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.allDoctors ? 'hidden' : ''}`} />
                    </li>
                    {/* ABOUT nav item */}
                    <li>
                        <Link
                            className="font-bold"
                            to="/about"
                            onClick={() => handleToggle('about')}
                        >
                            ABOUT
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.about ? 'hidden' : ''}`} />
                    </li>
                    {/* CONTACT nav item */}
                    <li>
                        <Link
                            className="font-bold"
                            to="/contact"
                            onClick={() => handleToggle('contact')}
                        >
                            CONTACT
                        </Link>
                        {/* Active state indicator */}
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.contact ? 'hidden' : ''}`} />
                    </li>
                </ul>

                {/* Create Account button for large screens */}
                <ul className="hidden lg:block">
                    <li>
                        <Link
                            to="/createaccount"
                            onClick={() => {
                                handleToggle('createAccount')
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

                {/* Mobile menu icon */}
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
                            <Link
                                className="font-bold"
                                to="/"
                                onClick={() => {
                                    handleToggle('home');
                                    onClose(); // Close drawer after navigation
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: `${isNotActivated.home ? 'white' : '#3A60E6'}`,
                                        color: `${isNotActivated.home ? 'black' : 'white'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    HOME
                                </Button>
                            </Link>
                        </div>
                        {/* Similar structure for other drawer links */}
                        <div className="text-center mt-4">
                            <Link
                                className="font-bold"
                                to="/doctors"
                                onClick={() => {
                                    handleToggle('allDoctors');
                                    onClose();
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: `${isNotActivated.allDoctors ? 'white' : '#3A60E6'}`,
                                        color: `${isNotActivated.allDoctors ? 'black' : 'white'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    ALL DOCTORS
                                </Button>
                            </Link>
                        </div>
                        <div className="text-center mt-4">
                            <Link
                                className="font-bold"
                                to="/about"
                                onClick={() => {
                                    handleToggle('about');
                                    onClose();
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: `${isNotActivated.about ? 'white' : '#3A60E6'}`,
                                        color: `${isNotActivated.about ? 'black' : 'white'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    ABOUT
                                </Button>
                            </Link>
                        </div>
                        <div className="text-center mt-4">
                            <Link
                                className="font-bold"
                                to="/contact"
                                onClick={() => {
                                    handleToggle('contact');
                                    onClose();
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: `${isNotActivated.contact ? 'white' : '#3A60E6'}`,
                                        color: `${isNotActivated.contact ? 'black' : 'white'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    CONTACT
                                </Button>
                            </Link>
                        </div>

                        {/* Create Account button in drawer */}
                        <div className="text-center mt-4">
                            <Link
                                className="font-bold"
                                to="/createaccount"
                                onClick={() => {
                                    handleToggle('createAccount');
                                    onClose();
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: `${isNotActivated.createAccount ? 'white' : '#3A60E6'}`,
                                        color: `${isNotActivated.createAccount ? 'black' : 'white'}`,
                                        fontWeight: "bold"
                                    }}
                                    size='lg'
                                >
                                    CREATE ACCOUNT
                                </Button>
                            </Link>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Separator line */}
            <hr />
        </nav>
    );
}

export default NavBar;
