import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Title({name, title}: Partial<IHeaderInformation>) {
    return (
        <div className="flex flex-col m-auto">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <h2 className="text-xl text-gray-600">{title}</h2>
        </div>
    );
}
