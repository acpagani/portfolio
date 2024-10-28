import { Link, useParams } from "react-router-dom";
import projetos from "../Projects/data/projects.json";
import skills from "../About/data/skills.json"
import { IoCaretBack } from "react-icons/io5";
import SkillCard from "../About/components/SkillCard";
import { RiShareBoxLine } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export default function ProjectDetails() {

    const { id } = useParams();

    const projeto = projetos.find(projeto => projeto.id == id);


    return (
        <>
            <div className="flex w-full max-w-screen-xl mx-auto px-14 justify-start items-center mb-3 flex-1">
                <Link to="/projects" className="group text-secondaryColor text-base font-bold flex items-center gap-2 p-2 rounded-lg hover:bg-terciaryColor transition-all">
                    <IoCaretBack className="group-hover:-translate-x-1 transition-transform"/>
                    Voltar
                </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-start justify-start flex-1 w-full max-w-screen-xl mx-auto px-14">
                <div className="flex flex-col gap-5">
                    <div className="md:size-80 ">
                        <Carousel 
                            className="w-full h-full"
                            showThumbs={false} 
                            showStatus={false} 
                            emulateTouch 
                            infiniteLoop 
                            autoPlay 
                            transitionTime={1000} 
                            interval={7000} 
                            useKeyboardArrows
                            renderArrowPrev={(clickHandler, hasPrev) => {
                                return (
                                    projeto.imageUrls.length > 0 &&
                                  <div
                                    className={`${
                                      hasPrev ? "absolute" : "hidden"
                                    } top-0 bottom-0 left-0 hidden md:flex justify-center items-center p-3 opacity-30 hover:opacity-100 hover:bg-primaryColor/20 transition-all duration-200 cursor-pointer z-20`}
                                    onClick={clickHandler}
                                  >
                                    <MdArrowLeft className="w-8 h-8 fill-primaryColor" />
                                  </div>
                                );
                              }}
                              renderArrowNext={(clickHandler, hasNext) => {
                                return (
                                    projeto.imageUrls.length > 0 && 
                                  <div
                                    className={`${
                                      hasNext ? "absolute" : "hidden"
                                    } top-0 bottom-0 right-0 hidden md:flex justify-center items-center md:p-2 opacity-30 hover:opacity-100 hover:bg-primaryColor/20 transition-all duration-200 cursor-pointer z-20`}
                                    onClick={clickHandler}
                                  >
                                    <MdArrowRight className="w-8 h-8 fill-primaryColor" />
                                  </div>
                                );
                              }}
                              renderIndicator={(clickHandler, isSelected, index, label) => {
                                const indicatorStyle = {
                                  backgroundColor: isSelected ? '#353535' : '#ccc',
                                  width: 10,
                                  height: 10,
                                  display: 'inline-block',
                                  margin: '0 5px',
                                  borderRadius: '50%',
                                  cursor: 'pointer'
                                };
                                return (
                                    projeto.imageUrls.length > 0 &&
                                  <li
                                    style={indicatorStyle}
                                    onClick={clickHandler}
                                    onKeyDown={clickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${label} ${index + 1}`}
                                    title={`${label} ${index + 1}`}
                                  />
                                );
                              }}
                            >
                            <div key={0} >
                                <img src={projeto.imageUrlBanner} alt={`${projeto.name} ${0}`} className="size-80 select-none object-cover rounded-lg"/>
                            </div>
                            {projeto.imageUrls.map((url, index) => (
                                <div key={index + 1} className="bg-white rounded-lg">
                                    <img src={url} alt={`${projeto.name} ${index + 1}`} className="size-80 select-none object-scale-down rounded-lg"/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
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
                    <div className="flex flex-col md:flex-row gap-5">
                        <a 
                            href={projeto.githubLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-3 text-2xl font-bold text-secondaryColor">GitHub <RiShareBoxLine/></a>
                        
                        {projeto.link &&
                          <a 
                          href={projeto.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-3 text-2xl font-bold text-secondaryColor">Projeto <RiShareBoxLine/></a>}
                        
                    </div>
                </div>
            </div>
        </>
    );
}
