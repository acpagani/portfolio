import SkillCard from './components/SkillCard';
import SkillCategory from './components/SkillCategory';
import skills from './data/skills.json'

function About() {
    return ( 
        <>
            <div className='flex flex-col gap-10 px-5'>
                <div className="flex">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-secondaryColor text-3xl">Quem é o Arthur?</h1>
                        </div>
                        <div className="text-secondaryColor">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum cupiditate mollitia quibusdam, quia culpa quos laboriosam libero tempora facere unde maxime odio nisi veniam amet quidem ipsum, enim debitis.
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div><h1>Minha Caixa de Ferramentas</h1></div>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5'>
                        <SkillCategory titulo={'Front-End'}>
                            {
                                skills
                                .filter( skill => skill.skillCategory == "Front-End")
                                .map(skill => (
                                    <SkillCard key={skill.id} {...skill}/>
                                ))
                            }
                        </SkillCategory>
                        <SkillCategory titulo={'Back-End'}>
                            {
                                skills
                                .filter( skill => skill.skillCategory == "Back-End")
                                .map(skill => (
                                    <SkillCard key={skill.id} {...skill}/>
                                ))
                            }
                        </SkillCategory>
                        <SkillCategory titulo={'Banco de Dados'}>
                            {
                                skills
                                .filter( skill => skill.skillCategory == "DB")
                                .map(skill => (
                                    <SkillCard key={skill.id} {...skill}/>
                                ))
                            }
                        </SkillCategory>
                        <SkillCategory titulo={'Outros'}>
                            {
                                skills
                                .filter( skill => skill.skillCategory == "Outros")
                                .map(skill => (
                                    <SkillCard key={skill.id} {...skill}/>
                                ))
                            }
                        </SkillCategory>
                    </div>
                </div>
                <div>
                    <div><h1>Dias de Códigos</h1></div>
                </div>
            </div>
        </>
     );
}

export default About;