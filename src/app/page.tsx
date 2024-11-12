import Header from "../components/header";
import resumeInformation from "./content/resume-information.json"
import {IContentInformation, IHeaderInformation, IResumeInformation} from "./interfaces/resume-information.interface";
import CareerExperience from "@/components/career-experience";
import WorkExperience from "@/components/work-experience";

export default function Resume() {
    const resume: IResumeInformation = resumeInformation as IResumeInformation;

    const headerInfo: IHeaderInformation = {
        name: resume.name,
        title: resume.title,
        phoneNumber: resume.phoneNumber,
        gitHubLink: resume.gitHubLink,
        gitHubName: resume.gitHubName,
        email: resume.email,
    };

    const contentInfo: IContentInformation = {
        experience: resume.experience,
        skills: resume.skills,
        education: resume.education,
        hobbies: resume.hobbies,
        objective: resume.objective,
    };

    return (
        <div className="main-columns w-full justify-between max-w-6xl flex shadow-lg print:shadow-none border print:border-0">
            <div className="bg-careerExperience border-r print:border-none">
                <Header {...headerInfo}/>
                <CareerExperience {...contentInfo}/>
            </div>
            <div className="bg-workExperience">
                <WorkExperience {...contentInfo}/>
            </div>
        </div>
    );
}