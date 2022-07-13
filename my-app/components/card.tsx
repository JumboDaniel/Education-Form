import { type } from "os";
import {EducationType} from "../types/type"


type Props={
  education: EducationType
}

export const Card: React.FC<Props> = ({ education }) => {
  return (
    <div  className="education-card">
      <div className="degree-field">{education.Degree}</div>
      <div className="date-field">{education.startDate} - {education.endDate}</div>
      <div className="education-field">{education.Education}</div>
      <div className="study-field">{education.StudyField}</div>
    </div>
  );
};
