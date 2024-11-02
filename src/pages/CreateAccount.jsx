import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CreateAccount = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return <section className="max-w-[90%] sm:max-w-[80%] m-auto flex justify-center ">
        <div className="border border-gray-300 w-[410px] p-8 my-16 rounded-lg shadow-lg">
            <p className="font-bold text-[22px] text-gray-600">Create Account</p>
            <p className="mt-3 text-gray-600">Please sign up to book appointment</p>

            <div className="mt-3">
                <label htmlFor="" className="text-sm font-bold text-gray-600">Full Name</label>
                <Input
                    type="text"
                    size="sm"
                    style={{
                        border: "1px solid grey",
                        marginTop: "3px",
                        borderRadius: "4px"
                    }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label htmlFor="" className="text-sm font-bold text-gray-600">Email</label>
                <Input
                    type="email"
                    size="sm"
                    style={{
                        border: "1px solid grey",
                        marginTop: "3px",
                        borderRadius: "4px"
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.email)}
                />
            </div>

            <div className="mt-3">
                <label htmlFor="" className="text-sm font-bold text-gray-600">Password</label>
                <Input
                    type="password"
                    size="sm"
                    style={{
                        border: "1px solid grey",
                        marginTop: "3px",
                        borderRadius: "4px"
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label htmlFor="" className="text-sm font-bold text-gray-600">Repeat Password</label>
                <Input
                    type="password"
                    size="sm"
                    style={{
                        border: "1px solid grey",
                        marginTop: "3px",
                        borderRadius: "4px"
                    }}
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </div>

            <Button
                size="sm"
                width="100%"
                marginTop="1em"
                backgroundColor="#3A60E6"
                color="white"
                _hover={{
                    backgroundColor: "#5A80FF"
                }}
            >
                Create an Account
            </Button>

            <p className="text-sm mt-4">Already have an account? <span className="text-blue-700 underline"><Link to="/login">Login Here</Link></span></p>
        </div>
    </section>

}

export default CreateAccount;