import { useState } from 'react';
import { FaCheck, FaDownload } from 'react-icons/fa';
import { GoCopy } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


export default function Home() {

    const [isCopied, setIsCopied] = useState(false)

    const copyPath = () => {
        navigator.clipboard.writeText('https://me-acp.vercel.app/')
        setIsCopied(true)
        alert('Link copiado para a área de transferência!')
        setTimeout(() => {
            setIsCopied(false)
        }, 4000)   
    }

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 flex-1 px-14 max-w-screen-xl  mx-auto'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl text-secondaryColor font-bold'>Olá! Me chamo <span className='text-hlColor drop-shadow'>Arthur</span></h1>
                        <div className='text-secondaryColor font-bold text-xl'>
                            <Typewriter
                            options={{
                                strings: ['Desenvolvedor', 'Futuro Engenheiro de Software', 'Estudante'],
                                autoStart: true,
                                loop: true,
                                delay: 75
                            }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                            <Link to="/about" className='flex items-center justify-center py-3 bg-hlColor text-white font-bold px-4 rounded-md'>
                                Saiba Mais
                            </Link>
                            <div className='flex flex-wrap items-center gap-5'>
                                <button 
                                    className='flex flex-1 gap-3 items-center justify-center py-3 bg-hlColor text-white font-bold px-4 rounded-md'
                                    onClick={() => {
                                        const link = document.createElement('a')
                                        link.href = '/assets/docs/curriculo.pdf'
                                        link.download = 'curriculo.pdf'
                                        document.body.appendChild(link)
                                        link.click()
                                        document.body.removeChild(link)
                                    }}
                                >
                                    Currículo
                                    <FaDownload/>
                                </button>
                                <button className='flex flex-1 gap-3 items-center justify-center py-3 bg-hlColor text-white font-bold px-4 rounded-md' onClick={copyPath}>
                                    Compartilhar
                                    {isCopied ? <FaCheck /> : <GoCopy />}
                                </button>
                            </div>
                    </div>
                </div>
                <div className='p-4 bg-secondaryColor rounded-full'>
                    <img 
                        src="/assets/images/myOctocat.png" 
                        alt="My Octocat"
                        className='size-60 max-sm:size-40' />
                </div>
            </div>
        </>
    )
}
