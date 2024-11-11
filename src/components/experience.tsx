import {IExperience} from "../app/interfaces/resume-information.interface";

export default function Experience(props: IExperience) {
    const {company, position, location, startDate, endDate, responsibilities} = props;

    const experienceHtml = responsibilities?.map((item: string, index: number) => <li className = "list-inside" key={index}>{item}</li>)

    return (
            <div className="mb-6">
                <div className="flex justify-between">
                    <h1 className="text-xl font-semibold">{position}</h1>
                    <p className="italic pl-4">{startDate} - {endDate ? endDate : 'Current'}</p>
                </div>
                <h3 className="text-gray-600 pl-4 mb-3">{company} - {location}</h3>
                <ul className="list-disc">{experienceHtml}</ul>
            </div>
    )
}