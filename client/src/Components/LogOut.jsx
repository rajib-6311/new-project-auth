import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate()
    const handleLogout = (e)=>{
        e.preventDefault()
        localStorage.removeItem('token')
        toast.success("LogOut successfully")
        navigate('/')
    }
    return (
        <div>
            <button
                onClick={handleLogout}
                className="mt-10 bg-sky-300 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
                LogOut
            </button>
        </div>
    );
};

export default LogOut;