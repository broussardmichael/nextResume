import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Title({name, title}: Partial<IHeaderInformation>) {
    return (
        <div className="flex flex-col mb-6">
            <h1>{name}</h1>
            <h2 className="text-gray-600">{title}</h2>
        </div>
    );
}
