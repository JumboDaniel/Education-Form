import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { useAppContext } from "../context/state";
import { EducationContext } from "../context/EducationContext";
import { DateType, EducationType } from "../types/type";
import Modal from "react-modal";
import FormInput from "../components/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "../components/card";
import { type } from "os";
import UniversitiesList from "../data-fetching/university";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "60%",
  },
};

const Education = () => {
  const { name, universities, setUniversities } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://universities.hipolabs.com/search?name`);
      const dataJson = await data.json();
      setUniversities(dataJson);
    };
    fetchData().catch(console.error);
  }, []);
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
  const [formData, setFormData] = useState<EducationType | null>();

  const handleFormData = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };
  const handleEducation = (results): void => {
    setFormData({
      ...formData,
      Education: results,
    });
  };
  const handleSave = (e: React.FormEvent, formData: EducationType | any) => {
    e.preventDefault();
    SaveEducation(formData);
    closeModal();
  };
  //Forrmat the day to to string and standard
  const options: DateType = { year: "numeric", month: "long", day: "numeric" };
  ///////////////////////////////////////////////////////////////
  return (
    <div className="education-container">
      <div>
        <div className="header-container">
          <h1>
            Welcome to {name} {""} your education page
          </h1>
          <button onClick={openModal} className="modal-btn">Add New Education Page</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="close-btn">
            X
          </button>
          <h2>Fill in your education details</h2>
          <form className="Form" onSubmit={(e) => handleSave(e, formData)}>
            <UniversitiesList handleEducation={handleEducation}/>
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
            <div className="input-container">
              <label>
                Start Date
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => {
                    setStartDate(date);
                    setFormData({
                      ...formData,
                      startDate: startDate.toLocaleDateString([], options),
                    });
                  }}
                />
              </label>
            </div>

            <div className="input-container">
              <label>
                End Date
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => {
                    setEndDate(date);
                    setFormData({
                      ...formData,
                      endDate: endDate.toLocaleDateString([], options),
                    });
                  }}
                />
              </label>
            </div>

            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        </Modal>
      </div>

      <div className="flex">
        <div className="side-container">
        {educations.map((education: EducationType, index: number) => {
            return <h3 key={index}>{education.Education}</h3>;
          })}
        </div>
        <div className="main-container">
          {educations.map((education: EducationType) => {
            return <Card education={education} key={education.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
