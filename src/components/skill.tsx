import {ISkillTopics} from "../app/interfaces/resume-information.interface";
import SkillRow from "@/components/skill-row";

export default function Skill(skill: Partial<ISkillTopics>) {
    const {languages, frameworks, libraries, databases, runtime, tools, development_methodologies} = skill;
    return (
        <div className="flex flex-col">
            {languages && languages.length > 0 && (<SkillRow skillName="Languages" skillList={languages}/>)}
            {frameworks && frameworks.length > 0 && (<SkillRow skillName="Frameworks" skillList={frameworks}/>)}
            {libraries && libraries.length > 0 && (<SkillRow skillName="Libraries" skillList={libraries}/>)}
            {databases && databases.length > 0 && (<SkillRow skillName="Databases" skillList={databases}/>)}
            {runtime && runtime.length > 0 && (<SkillRow skillName="Runtime" skillList={runtime}/>)}
            {tools && tools.length > 0 && (<SkillRow skillName="Tools" skillList={tools}/>)}
            {development_methodologies && development_methodologies.length > 0 && (
                <SkillRow skillName="Development Methodologies" skillList={development_methodologies}/>)}
        </div>
    );
}
