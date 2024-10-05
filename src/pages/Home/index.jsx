import Typewriter from 'typewriter-effect';


function Home() {
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
                        <div className='flex gap-5'>
                            <button className='py-3 bg-hlColor text-white font-bold px-4 rounded-md basis-1/2'>
                                Saiba Mais
                            </button>
                            <button className='py-3 bg-hlColor text-white font-bold px-4 rounded-md basis-1/2'>
                                Entre em contato!
                            </button>
                        </div>
                        <button  utton className='py-3 bg-hlColor text-white font-bold px-4 rounded-md'>Compartilhar</button>
                    </div>
                </div>
                <div className='p-4 bg-secondaryColor rounded-full'>
                    <img 
                        src="/assets/images/myOctocat.png" 
                        alt="My Octocat"
                        className='size-60' />
                </div>
            </div>
        </>
    )
}

export default Home;