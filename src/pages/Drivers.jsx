import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/FetchData"; // Adjust the import path as needed

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchData(
      "http://localhost:3000/drivers",
      (data) => setDrivers(data), // Directly use the fetched array
      "GET",
      null
    );
  }, []);

  return (
    <div>
      <h2>Driver List</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.driverId}>
            <h3>{driver.name}</h3>
            <p>License: {driver.license}</p>
            <p>Phone: {driver.phone}</p>
            <p>Email: {driver.email}</p>
            <p>
              Address: {driver.address.street}, {driver.address.zip}{" "}
              {driver.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drivers;
