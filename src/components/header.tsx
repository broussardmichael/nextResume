import {IHeaderInformation} from "../app/interfaces/resume-information.interface";
import Title from "@/components/title";
import Address from "@/components/address";

export default function Header(props: IHeaderInformation) {
    const {name, title, phoneNumber, gitHubLink, gitHubName, linkedin, email} = props;

    return (
        <header className="w-full h-1/4 flex justify-between space bg-header">
            <Title name={name} title={title}/>
            <Address phoneNumber={phoneNumber} gitHubLink={gitHubLink} gitHubName={gitHubName} linkedin={linkedin}
                     email={email}/>
        </header>
    );
}