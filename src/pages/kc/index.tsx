import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-2 w-full h-full flex flex-col">
      <h1 className="heading-1">Index</h1>
      <div className="flex gap-2">
        <button type="button" onClick={() => navigate("/kc/home-planner")}>
          Go to Home Planner
        </button>
      </div>
    </div>
  );
}

export default Home;
