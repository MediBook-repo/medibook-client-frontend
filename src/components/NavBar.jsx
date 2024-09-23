import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

import medibook_img_1 from '../assets/images/medibook-img-2.png';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

import { useDisclosure } from "@chakra-ui/react";

import 'boxicons';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isNotActivated, setIsNotActivated] = useState({
        home: false,
        allDoctors: true,
        about: true,
        contact: true,
        createAccount: true
    });

    const handleToggle = (key) => {
        setIsNotActivated({
            home: true,
            allDoctors: true,
            about: true,
            contact: true,
            createAccount: true,
            [key]: false
        });
    };

    return (
        <nav className="max-w-[90%] sm:max-w-[80%] m-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <img src={medibook_img_1} alt="MediBook Logo" className="w-[80px]" />
                    <p className="text-[1.7em]">
                        <span className="font-bold text-[#3A60E6]">Medi</span>
                        <span className="font-bold text-[#67C8FF]">Book</span>
                    </p>
                </div>

                <ul className="hidden lg:flex justify-between gap-5">
                    <li>
                        <Link
                            className="font-bold"
                            to="/"
                            onClick={() => handleToggle('home')}
                        >
                            HOME
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.home ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/doctors"
                            onClick={() => handleToggle('allDoctors')}
                        >
                            ALL DOCTORS
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.allDoctors ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/about"
                            onClick={() => handleToggle('about')}
                        >
                            ABOUT
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.about ? 'hidden' : ''}`} />
                    </li>
                    <li>
                        <Link
                            className="font-bold"
                            to="/contact"
                            onClick={() => handleToggle('contact')}
                        >
                            CONTACT
                        </Link>
                        <hr className={`border-0 h-[8%] bg-[#3A60E6] mt-1 w-[69%] m-auto ${isNotActivated.contact ? 'hidden' : ''}`} />
                    </li>
                </ul>

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

                <div className="block lg:hidden mt-2">
                    <box-icon name='menu-alt-right' color='#3A60E6' size='30px' onClick={onOpen}></box-icon>
                </div>
            </div>

            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size='full'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <div className="flex justify-between items-center">
                            <div className="flex  items-center">
                                <img src={medibook_img_1} alt="MediBook Logo" className="w-[60px]" />
                                <p className="text-[1.2em]">
                                    <span className="font-bold text-[#3A60E6]">Medi</span>
                                    <span className="font-bold text-[#67C8FF]">Book</span>
                                </p>
                            </div>
                            <box-icon name='x' onClick={onClose} className="cursor-pointer"></box-icon>
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        <div className="text-center mt-4">
                            <Link
                                className="font-bold"
                                to="/"
                                onClick={() => {
                                    handleToggle('home');
                                    onClose();
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

            <hr />
        </nav >
    );
}

export default NavBar;
