import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    return () => {
        storage.setItem(key, 1);
        navigate("/login");
    }
}

export default useAuth;