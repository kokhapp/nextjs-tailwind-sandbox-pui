"use client";
import Modal from "@/components/modal/Modal";
import { useState, useEffect } from "react";

const C08TimerCountdownModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [timerId, setTimerID] = useState("");

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      let newTimerID = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setTimerID(newTimerID);
    } else {
      if (timerId) {
        clearTimeout(timerId);
        setTimerID("");
      }
    }

    // Cleanup function for unmounting phase
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [showModal]);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg"
        onClick={openModalHandler}
      >
        Show Timer Countdown Modal
      </button>
      <h1 className="text-2xl text-blue-800">time ID: {timerId}</h1>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Timer Countdown Modal"
      >
        <div className="my-4">
          <h1 className="text-xl">
            This modal will be closed after 3 seconds.
          </h1>
          <h2 className="text-xl">It is just for Your infomation</h2>
        </div>
      </Modal>
    </div>
  );
};

export default C08TimerCountdownModal;
