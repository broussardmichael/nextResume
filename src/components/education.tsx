import {IEducation} from "../app/interfaces/resume-information.interface";

export default function Education(education: IEducation) {
    const {university, startDate, endDate, degree} = education;
    return (
        <>
            <h4>{degree}</h4>
            <p>{university}</p><p>{startDate} - {endDate}</p>
        </>
    );
}