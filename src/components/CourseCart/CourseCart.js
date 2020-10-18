import React from 'react';
import './CourseCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CourseCart = (props) => {
    const totalPrice = props.courseCart.reduce((total, pd) => total + pd.price, 0)
    
    return (
        <div className="cart-container">
            <h1>Course Summary</h1>
            <h3 className="text-warning">Course Item <FontAwesomeIcon icon={faCartPlus} />: {props.courseCart.length}</h3>
            <h5>Selected Course Name:</h5>
            {
                props.courseCart.map(pd => <p key = {pd.id} className="text-info"><strong>{pd.name}</strong></p>)
            }
            <p className="text-danger"><strong>Total Price:$ {totalPrice}</strong></p>
        </div>
    );
};

export default CourseCart;