import {IEducation} from "../app/interfaces/resume-information.interface";

export default function Education(education: IEducation) {
    const {university, startDate, endDate, degree} = education;
    return (
        <div className="bg-altContent rounded-lg p-2">
            <p className="font-semibold">{degree}</p>
            <p className="text-gray-600">{university}</p>
            <p className="text-gray-600">{startDate} - {endDate}</p>
        </div>
    );
}