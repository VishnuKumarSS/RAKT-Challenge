// eslint-disable-next-line react/prop-types
const FoodTruck = ({ name, latitude, longitude, description }) => {
  return (
    <div className="bg-card shadow-md rounded-lg p-8 mb-4 transition-transform transform hover:scale-105 border-dashed border-2 border-primary/50 text-textPrimary">
      <h3 className="text-xl font-semibold mb-2 font-bricolage">{name}</h3>
      <p className="text-sm text-textSecondary mb-4 font-space">
        {description}
      </p>
      <div className="flex items-center text-xs text-textSecondary font-space">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2c3.93 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.07-7 7-7z"
          />
          <circle cx="12" cy="9" r="2" fill="currentColor" />
        </svg>

        <span>
          ({latitude}, {longitude})
        </span>
      </div>
    </div>
  );
};

export default FoodTruck;
