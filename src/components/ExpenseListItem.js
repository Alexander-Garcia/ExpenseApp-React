// Export a stateless functional component 
// Render the description, amount, and createdAt value. 
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id , description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt} </p>
    </div>
)


export default ExpenseListItem
