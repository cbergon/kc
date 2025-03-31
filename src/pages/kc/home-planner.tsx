import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Home } from "@models/Home";
import UserSetup from "@app/modules/user-setup/UserSetup";

function HomePlanner() {
  const navigate = useNavigate();
  const [userHome, setUserHome] = useState<Home>({
    level: 0,
    items: [
      {
        name: "Red Velvet Couch",
        location: "furniture",
        load: 46,
        comfort: 264,
        enhancementLevel: 2,
      },
      {
        name: "Red Velvet Sofa",
        location: "furniture",
        load: 109,
        comfort: 463,
        enhancementLevel: 1,
      },
    ],
  });

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
          {/* USER SETUP */}
          <UserSetup userHome={userHome} setUserHome={setUserHome} />
          {/* PLANNER */}
          {/* <div className="p-2">
            <h2 className="heading-2">Planner</h2>
            <div className="px-2">
              <h3 className="heading-3">Planning Options</h3>
              <div className="px-2">
                <div>Optimisation type (evenly, maximise one, etc...)</div>
                <div>Suggest furniture merging</div>
              </div>
            </div>
            <div className="px-2">
              <h3 className="heading-3">Planning Results</h3>
              <div className="px-2">
                <h4 className="heading-4">Rooms List</h4>
                <div className="px-2">
                  <div>Items List Per Room</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePlanner;
