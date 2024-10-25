import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the home page ("/")
        navigate('/');
    }, [navigate]);

    return (
        <div>
            <h1>Logout Page</h1>
        </div>
    );
}

export default LogoutPage;
