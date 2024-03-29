export interface TTierEducation {
  tierEducation: TierEducation;
}

export interface TierEducation {
  id: string;
  eduTierName: string;
  preSchool: string;
}

export interface LevelEducation {
  id: string;
  eduLevelName: EducationSection;
  preSchool: string;
}

export interface EducationSection {
  id: string;
  eduName: string;
}
