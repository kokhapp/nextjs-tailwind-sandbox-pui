"use client";
import Modal from "@/components/modal/Modal";
import { useState } from "react";


const C03VideoPlayerModal = () => {
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
        Video Player Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Video Player Modal"
      >
        <div className="my-4 w-[600px] max-w-full">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U2Hr7QrxFiM?si=zqAetpzdMrrFBcZc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default C03VideoPlayerModal;
