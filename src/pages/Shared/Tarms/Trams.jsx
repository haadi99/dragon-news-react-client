import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div>
            <h1>Trams and Condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus consequatur atque error nulla rem quidem sapiente, maxime doloribus saepe laborum ut accusantium neque et quisquam expedita dolor, veritatis iusto!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Trams;