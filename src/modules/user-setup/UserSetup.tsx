import React from "react";
import HomeLevel from "@app/modules/user-setup/HomeLevel";
import { Home } from "@models/Home";

import { rooms_per_level } from "@data/home.json";

function getTargetComfort(roomCount: number) {
  if (roomCount <= 4) {
    return roomCount * 4200;
  }
  return 4 * 4200 + (roomCount - 4) * 7600;
}

function getCurrentComfort(items: Home["items"]) {
  if (items.length === 0) {
    return 0;
  }
  return items.reduce((acc, curr) => acc + curr.comfort, 0);
}

interface UserSetupProps {
  userHome: Home;
  setUserHome: (userHome: Home) => void;
}

function UserSetup(props: UserSetupProps) {
  const { userHome, setUserHome } = props;

  const roomCount =
    rooms_per_level.find((e) => userHome.level === e.level)?.room_count ?? 0;

  function updateLevel(newLevel: Home["level"], step: number) {
    setUserHome({ ...userHome, level: newLevel + step });
  }

  return (
    <div className="p-2">
      <h2 className="heading-2">User Settings</h2>
      <HomeLevel level={userHome.level} updateLevel={updateLevel} />
      <div className="px-2">
        <div>
          Number of rooms to fill: <strong>{roomCount ?? "-"}</strong>
        </div>
        <div>
          Total comfort needed to maximise charm generation:{" "}
          <strong>{getTargetComfort(roomCount)}</strong>
        </div>
        <div>
          Current available comfort:{" "}
          <strong>{getCurrentComfort(userHome.items)}</strong>
        </div>
      </div>
      {/* <div className="px-2">
        <h3 className="heading-3">Home Warehouse</h3>
        <div className="px-2">
          <div>Furniture Currently Owned List</div>
          <h4 className="heading-4">Furniture Selector</h4>
          <div className="px-2">
            <div>Item Type</div>
            <div className="px-2">
              <div>All Furniture List</div>
            </div>
            <div>Item Enhancement Level</div>
          </div>
        </div>
      </div> */}
      {/* ACTIONS */}
      {/* <div className="px-2">
        <h3 className="heading-3">Actions</h3>
        <div className="px-2">
          <div>Import setup</div>
          <div>Export setup</div>
        </div>
      </div> */}
    </div>
  );
}

export default UserSetup;
