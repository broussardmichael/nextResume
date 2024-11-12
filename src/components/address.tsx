import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {IHeaderInformation} from "../app/interfaces/resume-information.interface";

export default function Address(props: Partial<IHeaderInformation>) {
    const {phoneNumber, gitHubLink, gitHubName, linkedin, email} = props;

    return (
        <address className="flex w-full flex-col justify-evenly mb-2">
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
            <div className="flex">
                <a href={linkedin} target="_blank" rel="noopener noreferrer"
                   className="contact-icon hover:text-blue-500"><FontAwesomeIcon
                    icon={faLinkedin}/></a>
                <p className="text-sm">{linkedin}</p>
            </div>
        </address>
    );
}

/*
    <p className="text-sm">Phone: {phoneNumber}</p>
    <p className="text-sm">Email: <a href={`mailto:${email}`}>{email}</a></p>
<p className="text-sm"><strong>GitHub:</strong> <a href={gitHubLink}
                                                   className="text-blue-500">{gitHubName}</a></p>
<p className="text-sm"><strong>LinkedIn:</strong> <a href={linkedin}
                                                     className="text-blue-500">{linkedin}</a></p>*/
