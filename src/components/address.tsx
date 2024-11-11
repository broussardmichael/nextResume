import React from "react";
import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Address(props: Partial<IHeaderInformation>) {
    const {phoneNumber, gitHubLink, gitHubName, linkedin, email} = props;

    return (
        <address className="flex flex-col text-left m-auto">
            <p className="text-sm">Phone: {phoneNumber}</p>
            <p className="text-sm">Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p className="text-sm"><strong>GitHub:</strong> <a href={gitHubLink}
                                                               className="text-blue-500">{gitHubName}</a></p>
            <p className="text-sm"><strong>LinkedIn:</strong> <a href={linkedin}
                                                                 className="text-blue-500">{linkedin}</a></p>
        </address>
    );
}