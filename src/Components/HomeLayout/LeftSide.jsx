import React, { Suspense } from 'react';
import CatagoryNewa from '../../pages/Catagories';
import Catagories from '../../pages/Catagories';

const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
            }> <Catagories></Catagories></Suspense>

        </div>
    );
};

export default LeftSide;