import React from "react";
import C01SimpleHelloWorldModal from "./components/C01SimpleHelloWorldModal";

const ModalPage = () => {
  return (
    <div className="bg-white round-lg mx-4 p-4">
      <h1>This is Modal page</h1>
      <br />
      <br />
      <C01SimpleHelloWorldModal />
    </div>
  );
};

export default ModalPage;
