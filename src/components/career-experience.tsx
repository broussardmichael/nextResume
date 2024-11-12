import {IContentInformation, IHobby} from "../app/interfaces/resume-information.interface";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Hobby from "@/components/hobby";
import SectionTitle from "@/components/section-title";
import Objective from "@/components/objective";

export default function CareerExperience(props: IContentInformation) {
    return (
        <>
            <section className="mb-3">
                <SectionTitle title='Objective'/>
                <Objective objective={props.objective}/>
            </section>
            <section className="mb-3">
                <SectionTitle title='Skills'/>
                <Skills {...props.skills} />
            </section>
            <section className="mb-3">
                <SectionTitle title='Education'/>
                <Education {...props.education} />
            </section>
            <section className="mb-3">
                <SectionTitle title='Hobbies'/>
                {props.hobbies.map((hobby: IHobby, index) => (
                    <Hobby key={index} {...hobby} />
                ))}
            </section>
        </>
    );
}