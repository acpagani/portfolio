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
                        <a href=""><FaGithub className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href=""><FaLinkedin className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href=""><SiGmail className="size-7 fill-hlColor"/></a>
                    </li>
                    <li>
                        <a href=""><FaWhatsapp className="size-7 fill-hlColor"/></a>
                    </li>
                </ul>
            </div>
        </div>
        </>
     );
}

export default Footer;