export interface EducationType {
  id: number;
  Education: string;
  Grade: number;
  Degree: string;
  StudyField: string;
  startDate: string;
  endDate: string;
}

export type EducationContextType = {
  educations: EducationType[];
  SaveEducation: (education: EducationType) => void;
};

export interface Props {
  children: React.ReactNode;
}

export interface NameContext{
    name: any;
    setName: any;
  }
  
export type DateType = {
    year: any;
    month: any;
    day: any;
  };