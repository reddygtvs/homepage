import React from "react";

const Spinner = () => {
  return (
    <div role="status" className="flex h-screen items-center justify-center">
      <div className="loading h-16 w-16 rounded-full border-4" />
    </div>
  );
};

export default Spinner;
