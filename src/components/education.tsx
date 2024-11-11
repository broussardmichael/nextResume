import {IEducation} from "../app/interfaces/resume-information.interface";

export default function Education(education: IEducation) {
    const {university, startDate, endDate, degree} = education;
    return (
        <div className="mb-6">
            <p>{degree}</p>
            <p>{university}</p>
            <p>{startDate} - {endDate}</p>
        </div>
    );
}