export default function SkillCard({ skillName, skillIcon }) {
    return ( 
        <>
            <div className="flex flex-col gap-1 bg-inherit items-center justify-center">
                <img 
                    src={skillIcon} 
                    alt={`${skillName} icon`} 
                    className="size-11"/>
                <span>{skillName}</span>
            </div>
        </>
     );
}
