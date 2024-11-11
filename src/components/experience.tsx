import {IExperience} from "../app/interfaces/resume-information.interface";

export default function Experience(props: IExperience) {
    const {company, position, location, startDate, endDate, responsibilities, solutions} = props;

    const experienceHtml = responsibilities?.map((item: string, index: number) => <li key={index}>{item}</li>)
    const solutionsHtml = solutions?.map((item: string, index: number) => <li key={index}>{item}</li>)

    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">{position}</h1>
                <h2 className="text-gray-600">{startDate} - {endDate ? endDate : 'Current'}</h2>
                <h3 className="text-blue-600">{company} - {location}</h3>
            </div>
            <div>
                <ul>{experienceHtml}</ul>
            </div>
            {(solutionsHtml &&
                <div>
                    <ul>{solutionsHtml}</ul>
                </div>
            )}
        </div>
    )
}