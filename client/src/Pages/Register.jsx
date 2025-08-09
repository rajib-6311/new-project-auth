import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="min-h-screen bg-[linear-gradient(115deg,_#9F7AEA,_#FEE2FE)] py-20 text-black">
            <div className="container mx-auto">
                <div className="w-5/12 bg-white mx-auto rounded-lg flex">
                    {/* Left side with image */}
                    {/* <div className="w-1/2 bg-[url(https://i.ibb.co/sJ9hjHV5/3d.jpg)] rounded-lg flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-12">
                        <h1 className="text-white text-5xl font-bold pb-3">Welcome</h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            assumenda hic molestias laudantium obcaecati, quasi dolore rem
                            optio explicabo impedit iure, aliquam, quod facilis officiis.
                        </p>
                    </div> */}

                    {/* Right side with form */}
                    <div className="w-full p-6">
                        <h1 className="text-2xl font-bold pb-2">Register</h1>
                        {/* <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing.</p> */}

                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                    className="border border-gray-500 py-1 px-2 w-full"
                                    // onChange={(e) => setFirstName(e.target.value)}
                                />
                               
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    // onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    // onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            <div className="mt-5 flex items-center gap-3">
                                <input type="checkbox" />
                                <span>Lorem ipsum dolor sit amet consectetur?</span>
                            </div>

                            <div className="mt-5">
                                <button
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