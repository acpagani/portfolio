import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return ( 
        <>
        <div className="w-full flex items-center justify-center bg-terciaryColor py-5 mt-10">
            <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between py-2 md:py-4 px-14 max-w-screen-xl mx-auto w-full">
                <p className="text-secondaryColor font-bold text-sm text-center">Arthur Cotrick Pagani &copy; 2024</p>
                <ul className="flex text-secondaryColor font-bold text-base gap-10">
                    <li>
                        <a href="https://github.com/acpagani" target="_blank"><FaGithub className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/arthur-pagani/" target="_blank"><FaLinkedin className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href="mailto:arthurpagani00@gmail.com" target="_blank"><SiGmail className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href="https://wa.me/5511947498366/" target="_blank"><FaWhatsapp className="size-7 fill-hlColor"/></a>
                    </li>
                </ul>
            </div>
        </div>
        </>
     );
}

export default Footer;