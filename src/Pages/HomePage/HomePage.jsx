import React, { useState } from "react";
import Lista from "../../Components/List/List";
import Last20Questions from "../../Components/List/Last20Questions"

const HomePage = () => {
  return (
    <div className="Main Container">
      <Last20Questions />
      <hr></hr>
    </div>
  );
};

export default HomePage;
