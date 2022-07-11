import * as React from "react";
import { useState, useContext } from "react";
import { useAppContext } from "../context/state";
import { EducationContext } from "../context/EducationContext";

import Modal from "react-modal";
import FormInput from "../components/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

const Education = () => {
  const { name } = useAppContext();
  const {educations} = useContext(EducationContext);
  console.log(educations)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

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
            <FormInput
              type="number"
              placeholder="Using the 5 point systen"
              name={"Grade"}
              label={"Grade"}
            />
            <FormInput
              type="text"
              placeholder="Degree"
              name={"Degree"}
              label={"Degree"}
            />
            <FormInput
              type="text"
              placeholder="Field of Study"
              name={"StudyField"}
              label={"Field of Study"}
            />
            <label>
              Start Date
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </label>
            <label>
              End Date
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </label>
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
