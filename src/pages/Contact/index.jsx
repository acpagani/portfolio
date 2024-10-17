import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { bouncy } from 'ldrs'

bouncy.register()

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [requestStatus, setRequestStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos!")
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
        
        console.log(templateParams)
        setRequestStatus(true)

        emailjs.send("service_198kdyd", "template_4333qx7", templateParams, "zR4GwwkWnKRSW7OWV")
        .then((response) => {
            alert("Mensagem enviada com sucesso!", response.status, response.text)
            setName("")
            setEmail("")
            setMessage("")
            setRequestStatus(false)

        }, (err) => {
            alert("Erro ao enviar mensagem!", err)
            setName("")
            setEmail("")
            setMessage("")
            setRequestStatus(false)
        })
    }

    return ( 
        <div className="flex flex-col gap-10 items-center justify-start flex-1 w-full max-w-screen-xl mx-auto px-14">
            <h1 className="text-secondaryColor text-2xl font-bold text-center">Vamos <span className="text-hlColor">conversar</span>!</h1>
            <ul className="flex text-secondaryColor font-bold text-base gap-5 md:gap-10">
                <li>
                    <a href="https://github.com/acpagani" target="_blank"><FaGithub className="size-10 md:size-14 fill-hlColor hover:fill-secondaryColor transition-colors"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arthur-pagani/" target="_blank"><FaLinkedin className="size-10 md:size-14 fill-hlColor hover:fill-secondaryColor transition-colors"/></a>
                </li>
                <li>
                    <a href="mailto:arthurpagani00@gmail.com" target="_blank"><SiGmail className="size-10 md:size-14 fill-hlColor hover:fill-secondaryColor transition-colors"/></a>
                </li>
                <li>
                    <a href="https://wa.me/5511947498366/" target="_blank"><FaWhatsapp className="size-10 md:size-14 fill-hlColor hover:fill-secondaryColor transition-colors"/></a>
                </li>
            </ul>
            <form className="flex flex-col gap-5 w-full sm:max-w-80" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    name="name" 
                    className="border-2 border-secondaryColor caret-hlColor focus:outline-hlColor rounded-md p-2"
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}/>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    name="email" 
                    className="border-2 border-secondaryColor focus:outline-hlColor rounded-md p-2"
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}/>
                <textarea 
                    placeholder="Mensagem" 
                    name="message" 
                    className="border-2 border-secondaryColor focus:outline-hlColor rounded-md p-2"
                    onChange={(e) => {setMessage(e.target.value)}}
                    value={message}></textarea>
                <button 
                    type="submit" 
                    className="bg-hlColor text-white font-bold h-12 rounded-md hover:bg-secondaryColor hover:text-hlColor transition-colors flex items-center justify-center disabled:bg-hlColor disabled:opacity-70" 
                    disabled={requestStatus}>
                        {
                            requestStatus ? 
                            <l-bouncy
                            size="45"
                            speed="1.75" 
                            color="#F2F2F0" 
                            ></l-bouncy> 
                            : 
                            "Enviar"
                        }
                </button>
            </form>
        </div>
    );
}
