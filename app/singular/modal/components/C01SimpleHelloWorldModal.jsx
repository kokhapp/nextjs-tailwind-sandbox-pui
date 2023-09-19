"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const C01SimpleHelloWorldModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openModalHandler}
      >
        Show SimpleHelloWorlk Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Simple Hello World Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            maiores possimus dignissimos corrupti tenetur expedita pariatur
            molestiae alias. Facilis, deserunt!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default C01SimpleHelloWorldModal;
