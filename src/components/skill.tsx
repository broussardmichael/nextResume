import {ISkillTopics} from "../app/interfaces/resume-information.interface";

export default function Skill(skill: Partial<ISkillTopics>) {
    const {languages, frameworks, libraries, databases, runtime, tools, development_methodologies} = skill;
    return (
        <div className="flex flex-col">
            {languages && languages.length > 0 && (<p>Languages: {languages.join(', ')}</p>)}
            {frameworks && frameworks.length > 0 && (<p>Frameworks: {frameworks.join(', ')}</p>)}
            {libraries && libraries.length > 0 && (<p>Libraries: {libraries.join(', ')}</p>)}
            {databases && databases.length > 0 && (<p>Databases: {databases.join(', ')}</p>)}
            {runtime && runtime.length > 0 && (<p>Runtime: {runtime.join(', ')}</p>)}
            {tools && tools.length > 0 && (<p>Tools: {tools.join(', ')}</p>)}
            {development_methodologies && development_methodologies.length > 0 && (
                <p>Development Methodologies: {development_methodologies.join(', ')}</p>)}
        </div>
    );
}
