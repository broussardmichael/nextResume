import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Title({name, title}: Partial<IHeaderInformation>) {
    return (
        <div className="flex flex-col content-section">
            <h1>{name}</h1>
            <h2>{title}</h2>
        </div>
    );
}
