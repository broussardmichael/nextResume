import {IExperience} from "../app/interfaces/resume-information.interface";

export default function Experience(props: IExperience) {
    const {company, position, location, startDate, endDate, responsibilities} = props;

    const experienceHtml = responsibilities?.map((item: string, index: number) =>
        <li className="mb-1" key={index}>{item}</li>)

    return (
        <>
            <h3>{position}</h3>
            <div className="flex justify-between">
                <p className="mb-3">{company} - {location}</p>
                <p>{startDate} - {endDate ? endDate : 'Current'}</p>
            </div>
            <ul className="ml-5 list-disc">{experienceHtml}</ul>
        </>
    )
}