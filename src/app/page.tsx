import Header from "../components/header";
import Content from "../components/content";
import resumeInformation from "./content/resume-information.json"
import {IContentInformation, IHeaderInformation, IResumeInformation} from "./interfaces/resume-information.interface";

export default function Resume() {
    const resume: IResumeInformation = resumeInformation as IResumeInformation;

    const headerInfo: IHeaderInformation = {
        name: resume.name,
        title: resume.title,
        phoneNumber: resume.phoneNumber,
        gitHubLink: resume.gitHubLink,
        gitHubName: resume.gitHubName,
        linkedin: resume.linkedin,
        email: resume.email,
    };

    const contentInfo: IContentInformation = {
        experience: resume.experience,
        skills: resume.skills,
        education: resume.education,
        hobbies: resume.hobbies,
    };

    return (
        <div className="m-auto h-full w-full max-w-6xl flex items-center flex-col shadow-lg">
            <header className="h-[20vh] w-full">
                <Header {...headerInfo}/>
            </header>
            <main className="flex-grow w-full">
                <Content {...contentInfo}/>
            </main>
        </div>
    );
}