export default function SkillRow({skillName, skillList}: { skillName: string, skillList: string[] }) {
    return (
        <div className="flex mb-1">
            <div className="category">{skillName}:</div>
            <div>{skillList.join(', ')}</div>
        </div>
    );
}
