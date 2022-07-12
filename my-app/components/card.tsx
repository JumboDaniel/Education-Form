import { type } from "os";
import {EducationType} from "../types/type"


type Props={
  education: EducationType
}

export const Card: React.FC<Props> = ({ education }) => {
  return (
    <div>
      <div>{education.Degree}</div>
      <div>{education.Education}</div>
      <div>{education.StudyField}</div>
      <div>{education.endDate}</div>
      <div>{education.startDate}</div>
    </div>
  );
};
