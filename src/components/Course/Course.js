import React, { useState, useEffect } from 'react';
import courseInfo from '../../fakeData/courseInfo'
import CourseOutLine from '../CoureOutLine/CourseOutLine';
import CourseCart from '../CourseCart/CourseCart';
import'./Course.css'

const Course = () => {
    const [course, setcourse] = useState(courseInfo);
    const [courseCart, setCourseCart] = useState([])

    const addHandler = (course) => {
        const newCart = [...courseCart, course];
        setCourseCart(newCart);
    }
    return (
        <div className="course-container container bg-light">
            <div className="outLine-container">
            {
                course.map(course => <CourseOutLine info={course} key={course.id} addHandler={addHandler}></CourseOutLine>)
            }
            </div>
            <div className="cart-container">
                <CourseCart courseCart = {courseCart} ></CourseCart>
           </div>
        </div>
    );
};

export default Course;