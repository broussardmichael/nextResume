import {ISkills} from "../app/interfaces/resume-information.interface";
import Skill from "@/components/skill";

export default function Skills(skills: ISkills) {
    const {proficient, familiar, learning} = skills;
    return (
        <div className="mb-6">
            <h2>Proficient</h2>
            <Skill {...proficient}/>
            <h2>Familiar</h2>
            <Skill {...familiar}/>
            {(learning && learning.length > 0 &&
                <>
                    <h2>Currently Exploring</h2>
                    <p>{learning.join(', ')}</p>
                </>
            )}

        </div>
    );
}