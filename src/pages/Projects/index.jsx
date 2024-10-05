import { useState } from "react";
import SearchInput from "./components/SearchInput";
import projetos from "./data/projects.json"
import ProjectCard from "./components/ProjectCard";

function Projects() {

    const [search, setSearch] = useState('')

    const projetosFiltrados = projetos.filter( projeto => (
        projeto.name.toLowerCase().includes(search.toLowerCase())
    ))

    return ( 
        <>
        <div className="flex flex-col gap-10 items-center justify-center flex-1 w-full max-w-screen-xl mx-auto px-14">
            <h1 className="text-secondaryColor text-2xl font-bold text-center">Meus principais <span className='text-hlColor'>projetos</span></h1>
            <div className="w-full flex flex-col gap-5">
                <div className="flex items-center justify-end md:justify-center border-b-[1px]">
                    <SearchInput onChange={(event) => {setSearch(event.target.value);}}/>
                </div>
                <div className="flex flex-wrap gap-5 min-h-80">
                    {
                        projetosFiltrados.length > 0 ?
                        projetosFiltrados
                            .map( projeto => (
                                <ProjectCard key={projeto.id} {...projeto}/>
                            ))
                        :
                        <p className="font-bold text-secondaryColor text-base">Nenhum projeto encontrado</p>
                    }
                </div>
            </div>
        </div>
        </>
     );
}

export default Projects;