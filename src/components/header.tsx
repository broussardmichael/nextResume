import {IHeaderInformation} from "../app/interfaces/resume-information.interface";
import Title from "@/components/title";
import Address from "@/components/address";

export default function Header(props: IHeaderInformation) {
    const {name, title, phoneNumber, gitHubLink, gitHubName, linkedin, email} = props;

    return (
        <div className="flex justify-between mb-4">
            <header>
                <Title name={name} title={title}/>
                <Address phoneNumber={phoneNumber} gitHubLink={gitHubLink} gitHubName={gitHubName}
                         linkedin={linkedin}
                         email={email}/>
            </header>
        </div>
    );
}