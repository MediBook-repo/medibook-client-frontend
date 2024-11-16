import profile from "../assets/images/profile.png";
import { Button, Input, Select } from "@chakra-ui/react";

import { useRef, useState } from "react";

const MyProfile = () => {

    // useStates for inputs bro..
    const [myProfileInformation, setMyProfileInformation] = useState({
        profileUrl: "",
        profileFile: null,
        fullName: "Weezus Gonzales",
        email: "masterrekt2101@gmail.com",
        phone: "+639162637791",
        address: "",
        gender: "",
        birthdate: ""
    })


    const showInformationDiv = useRef(null);
    const editInformationDiv = useRef(null);

    const toggleVisibility = () => {
        if (editInformationDiv.current.classList.contains("hidden")) {
            editInformationDiv.current.classList.remove("hidden");
            showInformationDiv.current.classList.add("hidden");
        } else {
            editInformationDiv.current.classList.add("hidden");
            showInformationDiv.current.classList.remove("hidden");
        }
    }

    const fileInputRef = useRef(null);

    const handleFileUploadInput = () => {
        fileInputRef.current.click();
    };

    return <section className="max-w-[90%] sm:max-w-[80%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-4">
            <div ref={showInformationDiv}>
                <img src={profile} alt="" className="w-[150px]" />
                <p className="font-bold text-2xl mt-3">{myProfileInformation.fullName}</p>
                <hr className="bg-gray-400 h-[0.1em] border-0 mt-2" />
                <p className="mt-4 text-md underline text-gray-500 font-bold">CONTACT INFORMATION</p>
                <div className="flex gap-8 mt-2">
                    <p className="text-md font-bold">Email id:</p>
                    <p className="text-md font-bold text-sky-500">{myProfileInformation.email ? myProfileInformation.email : '--'}</p>
                </div>
                <div className="flex gap-11 mt-2">
                    <p className="text-md font-bold">Phone:</p>
                    <p className="text-md font-bold text-sky-500">{myProfileInformation.phone ? myProfileInformation.phone : '--'}</p>
                </div>
                <div className="flex gap-8 mt-2">
                    <p className="text-md font-bold">Address:</p>
                    <p className="text-md font-bold text-sky-500">{myProfileInformation.address ? myProfileInformation.address : '--'}</p>
                </div>
                <p className="mt-4 text-md underline text-gray-500 font-bold">BASIC INFORMATION</p>
                <div className="flex gap-[2.3em] mt-2">
                    <p className="text-md font-bold">Gender:</p>
                    <p className="text-md font-bold text-sky-500">{myProfileInformation.gender ? myProfileInformation.gender : '--'}</p>
                </div>
                <div className="flex gap-[1.7em] mt-2">
                    <p className="text-md font-bold">Birthday:</p>
                    <p className="text-md font-bold text-sky-500">{myProfileInformation.birthdate ?  myProfileInformation.birthdate : '--'}</p>
                </div>

                <Button
                    size="sm"
                    fontWeight="bold"
                    marginBlock='2em'
                    width="100px"
                    borderRadius="30px"
                    paddingBlock="1.5em"
                    backgroundColor="white"
                    border="1px solid #3A60E6"
                    _hover={
                        {
                            backgroundColor: "#3A60E6",
                            color: "white"
                        }
                    }
                    onClick={toggleVisibility}

                >Edit</Button>
            </div>


            <div className="hidden" ref={editInformationDiv}>
                <div>
                    <div className="relative cursor-pointer" onClick={handleFileUploadInput}>
                        <img src={profile} alt="" className="w-[150px] opacity-80" />
                        <div className="absolute left-[4em] top-[4em]">
                            <box-icon type='solid' name='add-to-queue' color='#3A60E6'></box-icon>
                        </div>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }} // Hide the input
                    />
                </div>

                <Input
                    placeholder=""
                    fontSize="1.5em"
                    width="300px"
                    fontWeight="bold"
                    marginTop="0.5em"
                    border="1px solid white"
                    value={myProfileInformation.fullName}
                />
                <hr className="bg-gray-400 h-[0.1em] border-0 mt-2" />
                <p className="mt-4 text-md underline text-gray-500 font-bold">CONTACT INFORMATION</p>
                <div className="flex gap-8 mt-2">
                    <p className="text-md font-bold">Email id:</p>
                    <p className="text-md font-bold text-sky-500">masterrekt2101@gmail.com</p>
                </div>
                <div className="flex gap-11 mt-2">
                    <p className="text-md font-bold">Phone:</p>
                    <Input
                        placeholder=""
                        size="xs"
                        width="300px"
                        backgroundColor="#ECECEC"
                    />
                </div>
                <div className="flex gap-8 mt-2">
                    <p className="text-md font-bold">Address:</p>
                    <Input
                        placeholder=""
                        size="xs"
                        width="300px"
                        backgroundColor="#ECECEC"
                    />
                </div>
                <p className="mt-4 text-md underline text-gray-500 font-bold">BASIC INFORMATION</p>
                <div className="flex gap-[2.3em] mt-2">
                    <p className="text-md font-bold">Gender:</p>
                    <Select
                        placeholder="Select option"
                        size="xs"
                        width="300px"
                        backgroundColor="#ECECEC"
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </div>
                <div className="flex gap-[1.7em] mt-2">
                    <p className="text-md font-bold">Birthday:</p>
                    <Input
                        placeholder=""
                        size="xs"
                        width="300px"
                        backgroundColor="#ECECEC"
                        type="date"
                    />
                </div>

                <Button
                    size="sm"
                    fontWeight="bold"
                    marginBlock='2em'
                    width="200px"
                    borderRadius="30px"
                    paddingBlock="1.5em"
                    backgroundColor="white"
                    border="1px solid #3A60E6"
                    _hover={
                        {
                            backgroundColor: "#3A60E6",
                            color: "white"
                        }
                    }
                    onClick={toggleVisibility}

                >Save Information</Button>
            </div>
        </div>

    </section >
}

export default MyProfile;