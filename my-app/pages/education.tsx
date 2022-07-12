import * as React from "react";
import { useState, useContext } from "react";
import { useAppContext } from "../context/state";
import { EducationContext, EducationType } from "../context/EducationContext";
import Modal from "react-modal";
import FormInput from "../components/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "../components/card";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "40%",
  },
};

const Education = () => {
  const { name } = useAppContext();
  //This is the local state for the datpicker components
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Modal components
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //////////////////////////////////////////////////////////////
  //Use the contet to receive tge educations array
  const { educations, SaveEducation } = useContext(EducationContext);
  // NOTE: this is to consume the EducationContext state and add new formData to the  state
  const [formData, setFormData] = useState<EducationType | {}>();

  const handleFormData = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const handleSave = (e: React.FormEvent, formData: EducationType | any) => {
    e.preventDefault();
    SaveEducation(formData);
    closeModal()
  };
  return (
    <div className="user-container">
      <div>
        <h1>
          Welcome to {name} {""} your education page
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
          <form className="Form" onSubmit={(e) => handleSave(e, formData)}>
            <FormInput
              type="text"
              placeholder="Fill in your education details"
              name={"Education"}
              label={"Education Details"}
              onChange={handleFormData}
            />
            <FormInput
              type="number"
              placeholder="Using the 5 point systen"
              name={"Grade"}
              label={"Grade"}
              onChange={handleFormData}
            />
            <FormInput
              type="text"
              placeholder="Degree"
              name={"Degree"}
              label={"Degree"}
              onChange={handleFormData}
            />
            <FormInput
              type="text"
              placeholder="Field of Study"
              name={"StudyField"}
              label={"Field of Study"}
              onChange={handleFormData}
            />
            <label>
              Start Date
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => {
                  setStartDate(date);
                  setFormData({
                    ...formData,
                    startDate: startDate,
                  });
                }}
              />
            </label>
            <label>
              End Date
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => {
                  setEndDate(date);
                  setFormData({
                    ...formData,
                    endDate: endDate,
                  });
                }}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </Modal>
      </div>
      <div className="flex">
        <div className="side-container"></div>
        <div className="main-container">
          {(educations).map((education: EducationType) => {
            return (
              (JSON.stringify(education))
            )
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
