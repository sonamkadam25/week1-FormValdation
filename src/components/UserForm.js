import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css'; // Import the CSS file

const UserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validate = () => {
      let errors = {};
      if (!formData.firstName) errors.firstName = 'First Name is required';
      if (!formData.lastName) errors.lastName = 'Last Name is required';
      if (!formData.username) errors.username = 'Username is required';
      if (!formData.email) errors.email = 'E-mail is required';
      if (!formData.password) errors.password = 'Password is required';
      if (!formData.phone) errors.phone = 'Phone Number is required';
      if (!formData.country) errors.country = 'Country is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.pan) errors.pan = 'Pan No. is required';
      if (!formData.aadhar) errors.aadhar = 'Aadhar No. is required';

      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    setIsFormValid(validate());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/details', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="password-toggle"
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="form-group">
        <label>Phone No.</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
       />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div className="form-group">
        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>
      <div className="form-group">
        <label>City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </>
          )}
          {formData.country === 'UK' && (
            <>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Birmingham">Birmingham</option>
            </>
          )}
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="form-group">
        <label>Pan No.</label>
        <input
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
        />
        {errors.pan && <p className="error">{errors.pan}</p>}
      </div>
      <div className="form-group">
        <label>Aadhar No.</label>
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
        />
        {errors.aadhar && <p className="error">{errors.aadhar}</p>}
      </div>
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default UserForm;