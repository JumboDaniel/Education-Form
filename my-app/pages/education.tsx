import * as React from "react";
import { useState } from "react";
import { useAppContext } from "../context/state";
import Modal from "react-modal";
import FormInput from "../components/input";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Education = () => {
  const { name } = useAppContext();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="user-container">
      <div>
        <h1>
          Welcome to {name} {""}education page
        </h1>
        <input />
        <button onClick={openModal}>Add New Education Page</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <h2>Fill in your education details</h2>
          <form>
            <input />
            <FormInput
              type="text"
              placeholder="Fill in your education details"
              name={"Education"}
              label={"Education Details"}
            />
          </form>
        </Modal>
      </div>
      <div className="flex">
        <div className="side-container"></div>
        <div className="main-container"></div>
      </div>
    </div>
  );
};

export default Education;
