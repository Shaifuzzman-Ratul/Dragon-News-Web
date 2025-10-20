import React from 'react';
import SocialLogin from '../../Layout/SocialLogin';
import FindUS from '../../Layout/FindUS';
import QZone from '../../Layout/QZone';

const RightSide = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUS></FindUS>
            <QZone></QZone>
        </div>
    );
};

export default RightSide;