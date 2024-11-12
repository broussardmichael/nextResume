export default function SkillRow({skillName, skillList}: { skillName: string, skillList: string[] }) {
    return (
        <div className="flex">
            <div className="category">{skillName}:</div>
            <div>{skillList.join(', ')}</div>
        </div>
    );
}
