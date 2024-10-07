import GitHubCalendar from 'react-github-calendar';
import SkillCard from './components/SkillCard';
import SkillCategory from './components/SkillCategory';
import skills from './data/skills.json'

function About() {
    const temaGithub = {
        light: ['#151B23', '#178FB4', '#21A5D1', '#49B7DA', '#72C8E3'],
        dark: ['#151B23', '#12576E', '#1B85A8', '#1E95BD', '#29C9FF'],
    }

    return ( 
        <>
            <div className='flex flex-col gap-10 px-14 w-full max-w-screen-xl mx-auto flex-1'>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondaryColor text-2xl font-bold text-center">Quem sou <span className='text-hlColor'>eu</span>?</h1>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-14'>
                        <div className='flex flex-col max-w-prose gap-3'>
                            <p className="text-secondaryColor">
                                Muito prazer! Me chamo <span className='text-hlColor font-bold'>Arthur Cotrick Pagani</span>, sou um jovem de 18 anos com um interesse imenso por tecnologia e programação. Atualmente, estou cursando o 2º semestre de Engenharia de Software na Faculdade de Informática e Administração Paulista (<span className='text-hlColor font-bold'>FIAP</span>).
                            </p>
                            <p className='text-secondaryColor'>
                                Desde pequeno, sempre fui fascinado por <span className='text-hlColor font-bold'>computadores e tecnologia</span>. Aos <span className='text-hlColor font-bold'>14 anos</span>, comecei a me interessar pela programação e fiz meu primeiro curso de <span className='text-hlColor font-bold'>Python</span>, e desde então, venho estudando e me aprimorando cada vez mais.
                            </p>
                            <p className='text-secondaryColor'>
                                Além disso, sou apaixonado por esportes, jogo <span className='text-hlColor font-bold'>vôlei</span> aos finais de semana e sou um grande fã do mundo dos <span className='text-hlColor font-bold'>E-Sports</span>.
                            </p>
                        </div>
                        <div className='bg-secondaryColor rounded-full min-w-52'>
                            <img 
                                src="/assets/images/me.png" 
                                alt="Me"
                                className='size-60 max-sm:size-40 rounded-full object-cover object-top' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h1 className='text-secondaryColor font-bold text-2xl text-center'>Minha <span className='text-hlColor'>Caixa de Ferramentas</span></h1>
                    </div>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-2 gap-5'>
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
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondaryColor text-2xl font-bold text-center'>Meus dias de <span className='text-hlColor'>Códigos</span></h1>
                    <div className='text-white font-bold flex justify-center'>
                        <GitHubCalendar theme={temaGithub} username='acpagani'/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default About;