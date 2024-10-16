export default function PageNotFound() {
    return ( 
        <div className="flex flex-col gap-10 items-center justify-center flex-1 w-full max-w-screen-xl mx-auto px-14">
            <h1 className="text-secondaryColor text-2xl font-bold text-center"><span className="text-hlColor">404 </span>Página não encontrada</h1>
            <p className="text-secondaryColor text-center">A página que você está procurando não existe ou foi removida.</p>
            <div className='p-4 bg-secondaryColor rounded-full'>
                    <img 
                        src="/assets/images/octocat404.png" 
                        alt="My Octocat"
                        className='size-60 max-sm:size-40' />
                </div>
        </div>
     );
}
