import { Home } from "@models/Home";
import React from "react";

interface HomeLevelProps {
  level: Home["level"];
  updateLevel: (level: Home["level"], step: number) => void;
}

function HomeLevel(props: HomeLevelProps) {
  const { level, updateLevel } = props;

  return (
    <div className="px-2 flex items-center gap-2">
      <h3 className="heading-3">Home Level</h3>
      <button
        type="button"
        className="px-4 bg-blue-400 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300"
        onClick={() => updateLevel(level, -1)}
        disabled={level <= 1}
      >
        -
      </button>
      <div className="flex justify-center w-6">{level}</div>
      <button
        type="button"
        className="px-4 bg-blue-400 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300"
        onClick={() => updateLevel(level, 1)}
        disabled={level >= 15}
      >
        +
      </button>
    </div>
  );
}

export default HomeLevel;
