import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="m-10 grid place-items-center">
      <div className="loading inline-block h-[50px] w-[50px] rounded-[50%]"></div>
    </div>
  );
};

export default Spinner;
