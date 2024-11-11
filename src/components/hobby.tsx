import {IHobby} from "../app/interfaces/resume-information.interface";

export default function Hobby(hobby: IHobby) {
    const {type, activities} = hobby;
    return (
        <div className="mb-6">
            <span>{type}: </span>
            <span>{(activities && activities.length > 0 && activities.join(', '))}</span>
        </div>
    );
}