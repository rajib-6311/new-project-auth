import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {serverUrl} from '../../config'


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    useEffect(()=>{
        if(token){
            navigate('/login')
        }
    },[token])

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleRegister = async(e) =>{
        e.preventDefault()
        try{
         setLoading(true)
         if(name && email && password){
            const response = await axios.post(`${serverUrl}/api/user/register`,{
                name,
                email,
                password
            })
            const data = response?.data;
            if(data?.success){
              toast.success(data?.message)
              navigate('/login')
            }else{
                toast.error(data?.message)
            }
         }
        }catch(error){
            console.error("User register error",error)
            toast.error(error?.message)
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(115deg,_#9F7AEA,_#FEE2FE)] py-20 text-black">
            <div className="container mx-auto">
                <div className="w-5/12 bg-white mx-auto rounded-lg flex">
                                      
                    <div className="w-full p-6">
                        <h1 className="text-2xl font-bold pb-2">Register</h1>
                       
                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                    className="border border-gray-500 py-1 px-2 w-full"
                                    value={name}
                                    onChange={handleName}
                                />                             
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>


                            <div className="mt-5 flex items-center gap-3">
                                <input type="checkbox" />
                                <span>Lorem ipsum dolor sit amet consectetur?</span>
                            </div>

                            <div className="mt-5">
                                <button
                                    onClick={handleRegister}
                                    type="submit"
                                    className="w-full bg-purple-500 py-3 text-center text-white cursor-pointer"
                                >
                                    Register Now
                                </button>
                            </div>
                        </form>

                        <p className="mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-purple-600 underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;