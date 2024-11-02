import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <section className="max-w-[90%] sm:max-w-[80%] m-auto flex justify-center ">
        <div className="border border-gray-300 w-[410px] p-8 my-16 rounded-lg shadow-lg">
            <p className="font-bold text-[22px] text-gray-600">Login</p>
            <p className="mt-3 text-gray-600">Please log in to book appointment</p>

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

            <p className="text-sm mt-4">Create an new account? <span className="text-blue-700 underline"><Link to="/createaccount">Click Here</Link></span></p>
        </div>
    </section>
}

export default Login;