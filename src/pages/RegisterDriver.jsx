import React, { useState } from "react";

const RegisterDriver = () => {
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    phone: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    assignedTruck: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add the logic to send formData to the backend API, e.g., using fetch or axios
  };

  return (
    <div>
      <h1>Register New Driver</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="license">License Number:</label><br />
          <input
            type="text"
            id="license"
            name="license"
            value={formData.license}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label><br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="street">Street Address:</label><br />
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="zip">ZIP Code:</label><br />
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="city">City:</label><br />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          /><br /><br />
        </div>

        <div>
          <label htmlFor="assignedTruck">Assigned Truck:</label><br />
          <select
            id="assignedTruck"
            name="assignedTruck"
            value={formData.assignedTruck}
            onChange={handleChange}
          >
            <option value="">Select a Truck</option>
            <option value="1">Truck 1</option>
            <option value="2">Truck 2</option>
            <option value="3">Truck 3</option>
            <option value="4">Truck 4</option>
            <option value="5">Truck 5</option>
          </select><br /><br />
        </div>

        <div>
          <label htmlFor="agreeToTerms">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label><br /><br />
        </div>

        <button type="submit">Register Driver</button>
      </form>
    </div>
  );
};

export default RegisterDriver;
