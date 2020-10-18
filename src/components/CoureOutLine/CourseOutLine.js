import React from 'react';
import './CourseOutLine.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const CourseOutLine = (props) => {
    const { name,instructor,price,url,id } = props.info;
    return (
        <div className="course-outline-contain">
            <div className = "course-img">
                <img src={url} alt=""/>
            </div>
            <div className="course-content">
                <h6>Course code: {id}</h6>
                <h3 className="text-info">Course Name:{name}</h3>
                <h4>Instructor name:{instructor}</h4>
                <h5 className="text-danger">Price: ${price}</h5>
                <Button className="mt-4" onClick={()=>props.addHandler(props.info)}>Enrol Now <FontAwesomeIcon icon={faPlusSquare} /></Button>
            </div>
        </div>
    );
};

export default CourseOutLine;