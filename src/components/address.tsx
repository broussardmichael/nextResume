import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Address(props: Partial<IHeaderInformation>) {
    const {phoneNumber, gitHubLink, gitHubName, email} = props;

    return (
        <address className="flex w-full flex-col justify-evenly">
            <div className="flex">
                <a href={`tel:${phoneNumber}`}
                   className="contact-icon hover:text-blue-500"><FontAwesomeIcon
                    icon={faPhone}/></a>
                <p className="text-sm">Phone: {phoneNumber}</p>
            </div>
            <div className="flex">
                <a href={`mailto:${email}`} className="contact-icon hover:text-blue-500"><FontAwesomeIcon
                    icon={faEnvelope}/></a>
                <p className="text-sm">{email}</p>
            </div>
            <div className="flex">
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer"
                   className="contact-icon hover:text-blue-500"><FontAwesomeIcon
                    icon={faGithub}/></a>
                <p className="text-sm">{gitHubName}</p>
            </div>
        </address>
    );
}
