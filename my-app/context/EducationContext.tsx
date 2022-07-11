import { createContext, useContext, useState } from "react";
import * as React from "react";


interface EducationType {
  id: number;
  Education: string;
  Grade: number;
  Degree: string;
  StudyField: string;
  startDate: string;
  endDate: string;
}

export const EducationContext = createContext<EducationType | null>(null);

const EducationProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [educations, setEducations] = useState<EducationType[]>([
    {
      id: 1,
      Education: "University of Washington",
      Grade: 4.5,
      Degree: "Bachleors",
      StudyField: "Computer Science",
      startDate: "11/4/5",
      endDate: "11/3/6",
    },
  ]);
  const SaveEducation = (education: EducationType) => {
    const newEducation: EducationType={
        id: Math.random(),
        Education: education.Education,
        Grade: education.Grade,
        Degree: education.Degree,
        StudyField: education.StudyField,
        startDate: education.startDate,
        endDate: education.endDate
    }
    setEducations([...educations, newEducation])
  }
  return (
        <EducationContext.Provider value={{educations, SaveEducation}}>
            {children}
        </EducationContext.Provider>
    )
};
export default EducationProvider