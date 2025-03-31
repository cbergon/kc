import React from "react";
import { useNavigate } from "react-router-dom";

function HomePlanner() {
  const navigate = useNavigate();

  return (
    <div className="p-2 w-full h-full flex flex-col">
      <h1 className="heading-1">Home Planner</h1>
      <div className="flex flex-col gap-2">
        {/* NAVIGATION */}
        <div className="p-2">
          <button type="button" onClick={() => navigate("/kc")}>
            Go to Home
          </button>
        </div>
        {/* PLANNER WRAPPER */}
        <div>
          {/* USER SETTINGS */}
          <div className="p-2">
            <h2 className="heading-2">User Settings</h2>
            {/* HOME LEVEL */}
            <div className="px-2">
              <h3 className="heading-3">Home Level</h3>
            </div>
            {/* HOME WAREHOUSE */}
            <div className="px-2">
              <h3 className="heading-3">Home Warehouse</h3>
              {/* FURNITURE CURRENTLY OWNED LIST */}
              <div className="px-2">
                <div>Furniture Currently Owned List</div>
                {/* FURNITURE SELECTOR */}
                <h4 className="heading-4">Furniture Selector</h4>
                <div className="px-2">
                  {/* ITEM TYPE */}
                  <div>Item Type</div>
                  <div className="px-2">
                    {/* ALL FURNITURE LIST */}
                    <div>All Furniture List</div>
                  </div>
                  {/* ITEM ENHANCEMENT LEVEL */}
                  <div>Item Enhancement Level</div>
                </div>
              </div>
            </div>
            {/* ACTIONS */}
            <div className="px-2">
              <h3 className="heading-3">Actions</h3>
              <div className="px-2">
                {/* IMPORT SETUP */}
                <div>Import setup</div>
                {/* EXPORT SETUP */}
                <div>Export setup</div>
              </div>
            </div>
          </div>
          {/* PLANNER */}
          <div className="p-2">
            <h2 className="heading-2">Planner</h2>
            {/* PLANNING OPTIONS */}
            <div className="px-2">
              <h3 className="heading-3">Planning Options</h3>
              <div className="px-2">
                <div>Optimisation type (evenly, maximise one, etc...)</div>
                <div>Suggest furniture merging</div>
              </div>
            </div>
            {/* PLANNING RESULTS */}
            <div className="px-2">
              <h3 className="heading-3">Planning Results</h3>
              {/* ROOMS LIST */}
              <div className="px-2">
                <h4 className="heading-4">Rooms List</h4>
                {/* ITEMS LIST PER ROOM */}
                <div className="px-2">
                  <div>Items List Per Room</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePlanner;
