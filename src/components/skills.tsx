import {ISkillTopics} from "../app/interfaces/resume-information.interface";
import Skill from "@/components/skill";

export default function Skills(skills: Partial<ISkillTopics>) {
    return (
        <div>
            {(skills &&
                <Skill {...skills} />
            )}
        </div>
    );
}