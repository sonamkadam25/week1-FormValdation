import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const { firstName, lastName, username, email, phone, country, city, pan, aadhar } = location.state || {};

    return (
        <div>
            <h2>Submitted Details</h2>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>PAN:</strong> {pan}</p>
            <p><strong>Aadhar:</strong> {aadhar}</p>
        </div>
    );
};

export default Details;