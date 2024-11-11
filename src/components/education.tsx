import {IEducation} from "../app/interfaces/resume-information.interface";

export default function Education(education: IEducation) {
    const {university, startDate, endDate, degree} = education;
    return (
        <div>
            <h1>Education</h1>
            <p>{degree}</p>
            <p>{university}</p>
            <p>{startDate} - {endDate}</p>
        </div>
    );
}