import {IContentInformation, IHobby} from "../app/interfaces/resume-information.interface";
import Education from "@/components/education";
import Hobby from "@/components/hobby";
import SectionTitle from "@/components/section-title";
import Objective from "@/components/objective";
import Skill from "@/components/skill";

export default function CareerExperience(props: IContentInformation) {
    return (
        <>
            <section className="content-section">
                <SectionTitle title='Objective'/>
                <Objective objective={props.objective}/>
            </section>
            <section className="content-section">
                <SectionTitle title='Skills'/>
                <Skill {...props.skills} />
            </section>
            <section className="content-section">
                <SectionTitle title='Education'/>
                <Education {...props.education} />
            </section>
            <section className="content-section">
                <SectionTitle title='Hobbies'/>
                {props.hobbies.map((hobby: IHobby, index) => (
                    <Hobby key={index} {...hobby} />
                ))}
            </section>
        </>
    );
}