import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }
        alert("Mensagem enviada com sucesso!")
    }

    return ( 
        <div className="flex flex-col gap-10 items-center justify-start flex-1 w-full max-w-screen-xl mx-auto px-14">
            <h1 className="text-secondaryColor text-2xl font-bold text-center">Vamos <span className="text-hlColor">conversar</span>!</h1>
            <ul className="flex text-secondaryColor font-bold text-base gap-5 md:gap-10">
                <li>
                    <a href="https://github.com/acpagani" target="_blank"><FaGithub className="size-10 md:size-14 fill-hlColor"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arthur-pagani/" target="_blank"><FaLinkedin className="size-10 md:size-14 fill-hlColor"/></a>
                </li>
                <li>
                    <a href="mailto:arthurpagani00@gmail.com" target="_blank"><SiGmail className="size-10 md:size-14 fill-hlColor"/></a>
                </li>
                <li>
                    <a href="https://wa.me/5511947498366/" target="_blank"><FaWhatsapp className="size-10 md:size-14 fill-hlColor"/></a>
                </li>
            </ul>
            <form className="flex flex-col gap-5 w-full sm:max-w-80" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" name="nome" className="border-2 border-secondaryColor rounded-md p-2"/>
                <input type="email" placeholder="E-mail" name="email" className="border-2 border-secondaryColor rounded-md p-2"/>
                <textarea placeholder="Mensagem" name="mensagem" className="border-2 border-secondaryColor rounded-md p-2"></textarea>
                <button type="submit" className="bg-hlColor text-white font-bold py-2 rounded-md hover:bg-secondaryColor hover:text-hlColor transition-colors">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;