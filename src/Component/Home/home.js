import React from 'react';
import Courses from '../Courses/Courses';

const home = () => {

    return (
        <div>

            <Courses limit={4}> </Courses>

        </div>
    );
};

export default home;