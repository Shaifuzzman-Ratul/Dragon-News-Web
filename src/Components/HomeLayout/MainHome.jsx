import React from 'react';
import { Navigate } from 'react-router';

const MainHome = () => {
    return (
        <div>
            <Navigate to={"/catagory/1"}></Navigate>
        </div>
    );
};

export default MainHome;