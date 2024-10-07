import { Link } from "react-router-dom";

function ProjectCard({ id, name, subtitle, imageUrlBanner }) {
    return ( 
        <div className="flex flex-col flex-1 bg-terciaryColor min-w-56 max-w-96 rounded-xl gap-5">
            <img 
            src={imageUrlBanner} alt="" 
            className="w-full basis-1/2 object-cover rounded-xl"/>
            <div className="flex flex-col gap-3 px-4 pb-5">
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-secondaryColor font-bold text-2xl">{name}</p>
                    <p className="text-secondaryColor text-base">{subtitle}</p>
                </div>
                <Link 
                to={`/projects/${id}`}
                className="text-secondaryColor font-bold bg-hlColor p-2 rounded-md hover:bg-secondaryColor hover:text-hlColor transition-colors self-center">Saiba Mais</Link>
            </div>
        </div>
     );
}

export default ProjectCard;