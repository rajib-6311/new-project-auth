
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogOut from '../Components/LogOut';

const ProfilePage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])
    return (
        <div className='container mx-auto py-20 text-center text-2xl font-bold'>
            <h1>Profile Page</h1>
            <LogOut/>
        </div>
    );
};

export default ProfilePage;