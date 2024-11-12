import {IContentInformation, IExperience} from "../app/interfaces/resume-information.interface";
import Experience from "@/components/experience";
import SectionTitle from "@/components/section-title";

export default function WorkExperience(props: IContentInformation) {
    return (
        <main>
            <SectionTitle title='Experience'/>
            {props.experience.map((experience: IExperience, index) => (
                <section key={index} className="mb-6">
                    <Experience {...experience} />
                </section>
            ))}
        </main>
    );
}