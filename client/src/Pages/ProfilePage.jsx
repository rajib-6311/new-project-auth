
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    );
};

export default ProfilePage;