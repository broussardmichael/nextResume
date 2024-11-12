export interface IResumeInformation {
    "name": string;
    "title": string;
    "phoneNumber": string;
    "gitHubLink": string;
    "gitHubName": string;
    "linkedin": string;
    "email": string;
    "objective": string;
    "experience": IExperience[],
    "skills": Partial<ISkillTopics>,
    "education": IEducation,
    "hobbies": IHobby[];
}

export interface IHobby {
    type: string;
    activities: string[];
}

export interface IHeaderInformation {
    "name": string;
    "title": string;
    "phoneNumber": string;
    "gitHubLink": string;
    "gitHubName": string;
    "linkedin": string;
    "email": string;
}

export interface IContentInformation {
    "objective": string;
    "experience": IExperience[],
    "skills": Partial<ISkillTopics>,
    "education": IEducation,
    "hobbies": IHobby[];
}

export interface IExperience {
    "company": string;
    "position": string;
    "startDate": string;
    "endDate": string;
    "responsibilities": string[];
    "location": string;
    "solutions"?: string[];
}

export interface ISkillTopics {
    "languages": string[];
    "frameworks": string[];
    "libraries": string[];
    "databases": string[];
    "runtime": string[];
    "tools": string[];
    "development_methodologies": string[];
}

export interface IEducation {
    "university": string;
    "startDate": string;
    "endDate": string;
    "degree": string;
}