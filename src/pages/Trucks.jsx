import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/FetchData";

const Trucks = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetchData(
      "http://localhost:3000/trucks",
      (data) => setTrucks(data),
      "GET",
      null
    );
  }, []);

  return (
    <div>
      <h2>Truck List</h2>
      <ul>
        {trucks.map((truck) => (
          <li key={truck.truckId}>
            <h3>{truck.name}</h3>
            <p>Model: {truck.model}</p>
            <p>Capacity: {truck.capacity} kg</p>
            <p>Max Speed: {truck.maxSpeed} km/h</p>
            <p>Weight: {truck.weight} kg</p>
            <p>Length: {truck.length} m</p>
            <p>
              Drivers:{" "}
              {truck.drivers && truck.drivers.length > 0
                ? truck.drivers.join(", ")
                : "None"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trucks;
