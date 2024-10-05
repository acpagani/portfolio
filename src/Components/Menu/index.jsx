import { NavLink } from "react-router-dom";

function Menu() {
    return ( 
        <div className="bg-secondaryColor flex items-center justify-center max-h-screen h-screen w-screen relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center z-0 absolute w-full text-center md:-bottom-20 leading-none text-black/20 md:text-black/40">
                <div><span className="font-bold text-[25vh] md:text-[25vw]">M</span></div>
                <div><span className="font-bold text-[25vh] md:text-[25vw]">E</span></div>
                <div><span className="font-bold text-[25vh] md:text-[25vw]">N</span></div>
                <div><span className="font-bold text-[25vh] md:text-[25vw]">U</span></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-16 z-10">
                <NavLink className={"text-3xl font-bold"} to={'/'}>Home</NavLink>
                <NavLink className={"text-3xl font-bold"} to={'/about'}>Sobre Mim</NavLink>
                <NavLink className={"text-3xl font-bold"} to={'/projects'}>Projetos</NavLink>
                <NavLink className={"text-3xl font-bold"} to={'contact'}>Contato</NavLink>
            </div>
        </div>

     );
}

export default Menu;