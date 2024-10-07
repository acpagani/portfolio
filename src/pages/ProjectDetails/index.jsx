import { Link, useParams } from "react-router-dom";
import projetos from "../Projects/data/projects.json";
import skills from "../About/data/skills.json"
import { IoCaretBack } from "react-icons/io5";
import SkillCard from "../About/components/SkillCard";
import { RiShareBoxLine } from "react-icons/ri";

function ProjectDetails() {

    const { id } = useParams();

    const projeto = projetos.find(projeto => projeto.id == id);

    return ( 
        <>
        <div className="flex w-full max-w-screen-xl mx-auto px-14 justify-start items-center mb-3 flex-1">
            <Link to="/projects" className="group text-secondaryColor text-base font-bold flex items-center gap-2 p-2 rounded-lg hover:bg-terciaryColor transition-all">
            <IoCaretBack className="group-hover:-translate-x-1 transition-transform"/>
            Voltar</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-start flex-1 w-full max-w-screen-xl mx-auto px-14">
            <div className="flex flex-col gap-5">
                <img src={projeto.imageUrl} alt={projeto.name} className="w-full h-80 object-cover rounded-lg"/>
                <h1 className="text-secondaryColor text-2xl font-bold">{projeto.name}</h1>
                <div className="flex items-center gap-2">
                    <img 
                        src={projeto.institutionImage} 
                        alt={`${projeto.institution} image`}
                        className="size-10 rounded-md" />
                    <p className="text-secondaryColor text-base font-bold">{projeto.institution}</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h2 className="text-secondaryColor text-xl font-bold">Descrição</h2>
                    <div className="flex flex-col gap-2 max-w-prose">
                        <p className="text-secondaryColor text-lg">{projeto.intro}</p>
                        <p className="text-secondaryColor text-base">{projeto.description}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-secondaryColor text-xl font-bold">Tecnologias</h2>
                    <div className="flex gap-7 font-bold text-secondaryColor flex-wrap">
                        {
                            projeto.skills
                                .map( skill => (
                                    <SkillCard key={skill} {...skills.find( s => s.id == skill)}/>
                                ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <a 
                        href={projeto.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-3 text-2xl font-bold text-secondaryColor">Projeto <RiShareBoxLine/></a>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProjectDetails;