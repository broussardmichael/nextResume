import {IContentInformation, IExperience, IHobby} from "../app/interfaces/resume-information.interface";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Hobby from "@/components/hobby";
import Experience from "@/components/experience";

export default function Content(props: IContentInformation) {
    return (
        <div className="h-3/4 w-full flex justify-between">
            <div className="w-3/5 bg-content">
                {props.experience.map((experience: IExperience, index) => (
                    <Experience key={index} {...experience} />
                ))}
            </div>
            <div className="bg-altContent alternate-content">
                <Skills {...props.skills} />
                <Education {...props.education} />
                {props.hobbies.map((hobby: IHobby, index) => (
                    <Hobby key={index} {...hobby} />
                ))}
            </div>
        </div>
    );
}
