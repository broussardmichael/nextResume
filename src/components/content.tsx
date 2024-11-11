import {IContentInformation, IExperience, IHobby} from "../app/interfaces/resume-information.interface";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Hobby from "@/components/hobby";
import Experience from "@/components/experience";
import SectionTitle from "@/components/section-title";

export default function Content(props: IContentInformation) {
    return (
        <div className="flex justify-between">
            <div className="w-3/5 p-4">
                <SectionTitle title='Experience'/>
                {props.experience.map((experience: IExperience, index) => (
                    <Experience key={index} {...experience} />
                ))}
            </div>
            <div className="bg-altContent p-4 w-2/5 m-2 rounded-lg">
                <SectionTitle title='Skills'/>
                <Skills {...props.skills} />
                <SectionTitle title='Education'/>
                <Education {...props.education} />
                <SectionTitle title='Hobbies'/>
                {props.hobbies.map((hobby: IHobby, index) => (
                    <Hobby key={index} {...hobby} />
                ))}
            </div>
        </div>
    );
}
