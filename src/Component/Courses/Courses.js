import React, { useEffect, useState } from 'react';
import './Courses.css'

const Courses = (props) => {

    //console.log(props.limit);

    let limit = props.limit ? props.limit : 0;
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="courses-border">
            <div className="row">
                <h1>Our Courses</h1>
                {
                    // Using-map-function-to-show-data-in-cart

                    courses.map((course, index) => {
                        return index < (limit > 0 ? limit : courses.length) && (<div className="col-md-3" key={course.id}>
                            <div className="cart mt-5">
                                <div className='img-size'>
                                    <img className="img-fluid" src={course.img} alt="" />
                                </div>
                                <div className="mt-3">
                                    <h5>{course.name}</h5>
                                    <div className='p-container'>
                                        <p>Duration: {course.duration}</p>
                                        <p>Class: {course.class}</p>
                                    </div>
                                    {/* <p><span className="fw-bold">Details:</span> {course.details}</p> */}
                                    <button className='btn btn-warning'>Details</button>
                                </div>
                            </div>
                        </div>)
                    })
                }

            </div>

        </div>
    );
};

export default Courses;