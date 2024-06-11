import { useState } from "react";
import FoodTruck from "./FoodTruck";

const FoodTruckList = () => {
  const [foodTrucks, setFoodTrucks] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchFoodTrucks = async () => {
    const response = await fetch(
      `http://localhost:8000/foodtruck_finder_api/nearby-foodtrucks/?latitude=${latitude}&longitude=${longitude}`
    );
    const data = await response.json();
    setFoodTrucks(data);
  };

  return (
    <div className="bg-background min-h-screen text-textPrimary p-6">
      <h1 className="text-4xl font-bold text-center mb-8 font-bricolage">
        Food Truck Finder
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="bg-card border border-gray-600 p-3 rounded-lg mr-2 w-1/5 font-space text-textPrimary placeholder-textSecondary"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="bg-card border border-gray-600 p-3 rounded-lg mr-2 w-1/5 font-space text-textPrimary placeholder-textSecondary"
        />
        <button
          onClick={fetchFoodTrucks}
          className="bg-primary text-white p-3 rounded-lg w-1/5 transition-colors duration-200 hover:bg-secondary font-space"
        >
          Find Food Trucks
        </button>
      </div>

      {foodTrucks !== null &&
        (foodTrucks.length === 0 ? (
          <p className="text-textError text-center text-xl font-bricolage">
            No food trucks nearby.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {foodTrucks.map((truck) => (
              <FoodTruck
                key={truck.name}
                name={truck.name}
                latitude={truck.latitude}
                longitude={truck.longitude}
                description={truck.description}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default FoodTruckList;
