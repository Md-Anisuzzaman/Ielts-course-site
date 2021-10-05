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
                {
                    // Using-map-function-to-show-data-in-cart

                    courses.map((course, index) => {
                        return index < (limit > 0 ? limit : courses.length) && (<div className="col-md-3" key={course.id}>
                            <div className="cart mt-5">
                                <div>
                                    <img className="img-fluid" src={course.img} alt="" />
                                </div>
                                <div className="mt-2">
                                    <h5>Course: {course.name}</h5>
                                    <p>Class: {course.class}</p>
                                    <p>Duration: {course.duration}</p>
                                    <p><span className="fw-bold">Details:</span> {course.details}</p>
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