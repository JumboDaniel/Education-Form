import { createContext, useContext, useState } from "react";
import * as React from "react";
import { type } from "os";


export interface EducationType {
  id: number;
  Education: string;
  Grade: number;
  Degree: string;
  StudyField: string;
  startDate: string;
  endDate: string;
}
export type EducationContextType ={
    educations: EducationType[];
    SaveEducation: (education: EducationType) => void;
}
interface Props {
    children: React.ReactNode;
  }

export const EducationContext = createContext<EducationContextType | null>(null);

const EducationProvider: React.FC<Props> = ({ children }) => {
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
    console.log(educations)
  }
  return (
        <EducationContext.Provider value={{educations, SaveEducation}}>
            {children}
        </EducationContext.Provider>
    )
};
export default EducationProvider